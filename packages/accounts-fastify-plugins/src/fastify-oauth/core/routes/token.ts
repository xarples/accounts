import { FastifyInstance, FastifyPluginAsync, FastifyReply } from 'fastify'
import fp from 'fastify-plugin'
import { codeChallenge } from '@xarples/accounts-utils'
import { tokenRequestSchema } from '../schemas'
import { TokenRequest } from '../types'
import { FastifyRequest } from 'fastify'

const plugin: FastifyPluginAsync = async fastify => {
  const _authorizationCodeHandler = authorizationCodeGrantHandler.bind(fastify)
  const _clientCredentialsHandler = clientCredentialsGrantHandler.bind(fastify)
  const _refreshTokenHandler = refreshTokenGrantHandler.bind(fastify)

  fastify.post<TokenRequest>(
    '/token',
    {
      attachValidation: true,
      schema: tokenRequestSchema,
      preHandler: fastify.clientAuthPreHandler
    },
    async (request, reply) => {
      if (request.validationError) {
        reply.code(400).send({
          error: 'unsupported_grant_type',
          error_description: request.validationError.message
        })
      }

      await _authorizationCodeHandler(request, reply)
      await _clientCredentialsHandler(request, reply)
      await _refreshTokenHandler(request, reply)
    }
  )
}

async function clientCredentialsGrantHandler(
  request: FastifyRequest<TokenRequest>,
  reply: FastifyReply
) {
  if (request.body.grant_type === 'client_credentials') {
    const fastify = this as FastifyInstance

    const accessToken = await fastify.accessTokenService.create({
      clientId: request.client!.clientId,
      scopeList: request.body.scope?.split(' ')
    })

    reply.code(200).send({
      access_token: accessToken.token,
      token_type: 'Bearer',
      expires_in: 3600
    })

    return
  }
}

async function refreshTokenGrantHandler(
  request: FastifyRequest<TokenRequest>,
  reply: FastifyReply
) {
  if (request.body.grant_type === 'refresh_token') {
    const fastify = this as FastifyInstance

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

    if (refreshToken!.client_id !== request.client!.clientId) {
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
      clientId: request.client!.clientId,
      scopeList: authorizationCode!.scopes
    })

    const nextRefreshToken = await fastify.refreshTokenService.create({
      authorizationCodeId: refreshToken!.authorization_code_id,
      userId: authorizationCode!.user_id,
      clientId: request.client!.clientId,
      scopeList: authorizationCode!.scopes
    })

    reply.code(200).send({
      access_token: accessToken.token,
      token_type: 'Bearer',
      expires_in: 3600,
      refresh_token: nextRefreshToken.token
    })

    return
  }
}

async function authorizationCodeGrantHandler(
  request: FastifyRequest<TokenRequest>,
  reply: FastifyReply
) {
  const fastify = this as FastifyInstance

  if (request.body.grant_type === 'authorization_code') {
    fastify.log.info(`Requesting authorization_code: ${request.body.code}`)

    const authorizationCode = await fastify.authorizationCodeService.get({
      code: request.body.code
    })

    fastify.log.info(
      `Validating if authorization_code: ${request.body.code} exist`
    )

    if (!authorizationCode) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Authorization code is invalid or revoked'
      })

      return
    }

    fastify.log.info(
      `Validating if authorization_code: ${request.body.code} is expired`
    )

    if (fastify.authorizationCodeService.isExpired(authorizationCode)) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Authorization code is expired'
      })

      return
    }

    fastify.log.info(
      `Validating if authorization_code: ${request.body.code} belongs to the authenticated client`
    )

    if (authorizationCode!.client_id !== request.client.clientId) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Invalid client'
      })

      return
    }

    fastify.log.info(
      `Validating if code_verifier: ${request.body.code_verifier} exist`
    )

    if (!request.body?.code_verifier) {
      reply.code(400).send({
        error: 'invalid_request',
        error_description: 'Invalid code verifier'
      })

      return
    }

    fastify.log.info(
      `Calculating code_challenge from code_verifier: ${request.body.code_verifier}`
    )

    const _codeChallenge = codeChallenge(request.body.code_verifier, {
      codeChallengeMethod: authorizationCode!.code_challenge_method as
        | 'plain'
        | 'S256'
    })

    fastify.log.info(
      `Validating if code_challenge ${_codeChallenge} is equal to the authorization_code's one ${
        authorizationCode!.code_challenge
      }`
    )

    if (_codeChallenge !== authorizationCode!.code_challenge) {
      reply.code(400).send({
        error: 'invalid_request',
        error_description: 'Invalid code challenge'
      })

      return
    }

    fastify.log.info(
      `Validating if redirect_uri ${
        request.body.redirect_uri
      } is equal to the authorization_code's one ${
        authorizationCode!.redirect_uri
      }`
    )

    if (request.body.redirect_uri !== authorizationCode!.redirect_uri) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Invalid redirect_uri'
      })

      return
    }

    fastify.log.info('Issuing access_token')

    const accessToken = await fastify.accessTokenService.create({
      authorizationCodeId: authorizationCode!.id,
      userId: authorizationCode!.user_id,
      clientId: request.client.clientId,
      scopeList: authorizationCode.scopes
    })

    fastify.log.info('Issuing refresh_token')

    const refreshToken = await fastify.refreshTokenService.create({
      authorizationCodeId: authorizationCode!.id,
      userId: authorizationCode!.user_id,
      clientId: request.client.clientId,
      scopeList: authorizationCode.scopes
    })

    reply.code(200).send({
      access_token: accessToken.token,
      token_type: 'Bearer',
      expires_in: 3600,
      refresh_token: refreshToken.token
    })
  }
}

export default fp(plugin, '3.x')
