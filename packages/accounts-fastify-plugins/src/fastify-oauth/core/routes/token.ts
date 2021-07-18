import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { calculateCodeChallenge, decodeBasic } from '@xarples/accounts-utils'
import { postTokenSchema } from '../schemas'
import { PostTokenRoute } from '../types'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.post<PostTokenRoute>(
    '/token',
    {
      attachValidation: true,
      schema: postTokenSchema,
      onRequest: fastify.basicAuth
    },
    async (request, reply) => {
      if (request.validationError) {
        reply.code(400).send({
          error: 'unsupported_grant_type',
          error_description: request.validationError.message
        })

        return
      }

      if (request.body.grant_type === 'client_credentials') {
        const credentials = decodeBasic(request.headers.authorization!)

        const accessToken = await fastify.accessTokenService.create({
          clientId: credentials!.clientId
        })

        reply.send({
          access_token: accessToken.token,
          token_type: 'Bearer',
          expires_in: 3600
        })

        return
      }

      if (request.body.grant_type === 'refresh_token') {
        const refreshToken = await fastify.refreshTokenService.get({
          token: request.body.refresh_token
        })

        if (!refreshToken) {
          reply.code(400).send({
            error: 'invalid_grant',
            error_description: 'Refresh token is invalid or revoked'
          })

          return
        }

        const credentials = decodeBasic(request.headers.authorization!)

        if (refreshToken!.client_id !== credentials!.clientId) {
          reply.code(400).send({
            error: 'invalid_grant',
            error_description: 'Invalid client'
          })

          return
        }

        if (fastify.refreshTokenService.isExpired(refreshToken)) {
          reply.code(400).send({
            error: 'invalid_grant',
            error_description: 'Refresh token is expired'
          })

          return
        }

        const authorizationCode = await fastify.authorizationCodeService.get({
          id: refreshToken!.authorization_code_id
        })

        const accessToken = await fastify.accessTokenService.create({
          authorizationCodeId: refreshToken!.authorization_code_id,
          userId: authorizationCode!.user_id,
          clientId: credentials!.clientId
        })

        const nextRefreshToken = await fastify.refreshTokenService.create({
          authorizationCodeId: refreshToken!.authorization_code_id,
          userId: authorizationCode!.user_id,
          clientId: credentials!.clientId
        })

        reply.send({
          access_token: accessToken.token,
          token_type: 'Bearer',
          expires_in: 3600,
          refresh_token: nextRefreshToken.token
        })

        return
      }

      const authorizationCode = await fastify.authorizationCodeService.get({
        code: request.body.code
      })

      if (!authorizationCode) {
        reply.code(400).send({
          error: 'invalid_grant',
          error_description: 'Authorization code is revoked'
        })

        return
      }

      if (fastify.authorizationCodeService.isExpired(authorizationCode)) {
        reply.code(400).send({
          error: 'invalid_grant',
          error_description: 'Authorization code is expired'
        })

        return
      }

      if (request.body.client_id !== authorizationCode!.client_id) {
        reply.code(400).send({
          error: 'invalid_grant',
          error_description: 'Invalid client_id'
        })

        return
      }

      if (!request.body?.code_verifier) {
        reply.code(400).send({
          error: 'invalid_request',
          error_description: 'Invalid code verifier'
        })

        return
      }

      const codeChallenge = calculateCodeChallenge({
        codeChallengeMethod: authorizationCode!.code_challenge_method as
          | 'plain'
          | 'S256',
        codeVerifier: request.body.code_verifier
      })

      if (codeChallenge !== authorizationCode!.code_challenge) {
        reply.code(400).send({
          error: 'invalid_request',
          error_description: 'Invalid code challenge'
        })

        return
      }

      if (request.body.redirect_uri !== authorizationCode!.redirect_uri) {
        reply.code(400).send({
          error: 'invalid_grant',
          error_description: 'Invalid redirect_uri'
        })

        return
      }

      const accessToken = await fastify.accessTokenService.create({
        authorizationCodeId: authorizationCode!.id,
        userId: authorizationCode!.user_id,
        clientId: request.body.client_id
      })

      const refreshToken = await fastify.refreshTokenService.create({
        authorizationCodeId: authorizationCode!.id,
        userId: authorizationCode!.user_id,
        clientId: request.body.client_id
      })

      reply.send({
        access_token: accessToken.token,
        token_type: 'Bearer',
        expires_in: 3600,
        refresh_token: refreshToken.token
      })
    }
  )

  fastify.setErrorHandler((error, request, reply) => {
    if (error.statusCode === 401) {
      reply
        .code(401)
        .header('WWW-Authenticate', 'Basic')
        .send({
          error: 'invalid_client',
          error_description: 'Client authentication failed'
        })

      return
    }

    fastify.errorHandler(error, request, reply)
  })
}

export default fp(plugin, '3.x')
