import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { calculateCodeChallenge, decodeBasic } from '@xarples/accounts-utils'
import { isAfter } from 'date-fns'
import {
  getAuthorizeSchema,
  postTokenSchema,
  postIntrospectSchema
} from '../schemas'
import {
  GetAuthorizeRoute,
  PostAuthorizeRoute,
  PostIntrospectRoute,
  PostTokenRoute
} from '../types'
import getUnixTime from 'date-fns/getUnixTime'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.get<GetAuthorizeRoute>(
    '/authorize',
    {
      // preHandler: fastify.authPreHandler,
      schema: getAuthorizeSchema,
      attachValidation: true
    },
    async (request, reply) => {
      try {
        if (request.validationError) {
          reply.code(400).send({
            error: 'invalid_request',
            error_description: request.validationError.message
          })

          return
        }

        const client = await fastify.clientService
          .get({
            clientId: request.query.client_id
          })
          .catch(() => {
            reply.code(400).send({
              error: 'invalid_request',
              error_description: 'Invalid client'
            })

            return
          })

        if (!client?.redirect_uris.includes(request.query.redirect_uri)) {
          reply.code(400).send({
            error: 'invalid_request',
            error_description: 'Invalid redirect_uri'
          })

          return
        }

        fastify.nuxt.render(request.raw, reply.raw)
      } catch (error) {
        reply.code(500).send({
          error: 'server_error',
          error_description: error.message
        })
      }
    }
  )

  fastify.post<PostAuthorizeRoute>(
    '/authorize/:consent',
    async (request, reply) => {
      if (request.params.consent === 'deny') {
        const params = new URLSearchParams({
          error: 'access_denied',
          error_description:
            'The resource owner or authorization server denied the request.'
        })

        if (request.body.state) {
          params.set('state', request.body.state)
        }

        reply.redirect(302, `${request.body.redirect_uri}?${params.toString()}`)

        return
      }

      const authorizationCode = await fastify.authorizationCodeService.create({
        clientId: request.body.client_id,
        codeChallenge: request.body.code_challenge,
        codeChallengeMethod: request.body.code_challenge_method,
        redirectUri: request.body.redirect_uri
      })

      const params = new URLSearchParams({
        code: authorizationCode.code
      })

      if (request.body.state) {
        params.set('state', request.body.state)
      }

      reply.redirect(302, `${request.body.redirect_uri}?${params.toString()}`)
    }
  )

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
          error: 'invalid_request',
          error_description: request.validationError.message
        })

        return
      }

      if (request.body.grant_type === 'client_credentials') {
        const accessToken = await fastify.accessTokenService.create({
          clientId: request.body.client_id
        })

        reply.send({
          access_token: accessToken.token,
          token_type: 'Bearer',
          expires_in: 3600
        })

        return
      }

      if (request.body.grant_type === 'refresh_token') {
        const refreshToken = await fastify.refreshTokenService
          .get({
            token: request.body.refresh_token || undefined
          })
          .catch(() => {
            reply.code(400).send({
              error: 'invalid_grant',
              error_description: 'Refresh token is invalid or revoked'
            })

            return
          })

        if (refreshToken!.client_id !== request.body.client_id) {
          reply.code(400).send({
            error: 'invalid_grant',
            error_description: 'Invalid client_id'
          })

          return
        }

        const currentDate = new Date()
        const expiresIn = new Date(refreshToken!.expires_in)

        if (isAfter(currentDate, expiresIn)) {
          reply.code(400).send({
            error: 'invalid_grant',
            error_description: 'Refresh token is expired'
          })

          return
        }

        const accessToken = await fastify.accessTokenService.create({
          clientId: request.body.client_id
        })

        const nextRefreshToken = await fastify.refreshTokenService.create({
          clientId: request.body.client_id
        })

        reply.send({
          access_token: accessToken.token,
          token_type: 'Bearer',
          expires_in: 3600,
          refresh_token: nextRefreshToken.token
        })

        return
      }

      const authorizationCode = await fastify.authorizationCodeService
        .get({
          code: request.body.code
        })
        .catch(() => {
          reply.code(400).send({
            error: 'invalid_grant',
            error_description: 'Authorization code is revoked'
          })

          return
        })

      const currentDate = new Date()
      const expiresIn = new Date(authorizationCode!.expires_in)

      if (isAfter(currentDate, expiresIn)) {
        reply.code(400).send({
          error: 'invalid_grant',
          error_description: 'Authorization code is expired'
        })

        return
      }

      if (authorizationCode!.client_id !== request.body.client_id) {
        reply.code(400).send({
          error: 'invalid_grant',
          error_description: 'Invalid client_id'
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
          error: 'invalid_grant',
          error_description: 'Invalid code_challenge'
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
        clientId: request.body.client_id,
        authorizationCodeId: authorizationCode!.id
      })

      const refreshToken = await fastify.refreshTokenService.create({
        clientId: request.body.client_id,
        authorizationCodeId: authorizationCode!.id
      })

      reply.send({
        access_token: accessToken.token,
        token_type: 'Bearer',
        expires_in: 3600,
        refresh_token: refreshToken.token
      })
    }
  )

  fastify.post<PostIntrospectRoute>(
    '/introspect',
    {
      attachValidation: true,
      onRequest: fastify.basicAuth,
      schema: postIntrospectSchema
    },
    async (request, reply) => {
      try {
        if (request.validationError) {
          reply.code(200).send({
            active: false
          })

          return
        }

        let promise: ReturnType<typeof fastify.refreshTokenService.get>

        const tokenTypeHint = request.body.token_type_hint

        if (tokenTypeHint === 'access_token') {
          promise = fastify.accessTokenService.get({
            token: request.body.token
          })
        } else if (tokenTypeHint === 'refresh_token') {
          promise = fastify.refreshTokenService.get({
            token: request.body.token
          })
        } else {
          const result = (
            await Promise.allSettled([
              fastify.accessTokenService.get({
                token: request.body.token
              }),
              fastify.refreshTokenService.get({
                token: request.body.token
              })
            ])
          ).find(({ status }) => status === 'fulfilled')

          if (result?.status === 'fulfilled') {
            promise = Promise.resolve(result.value)
          } else {
            throw new Error('Token is expired or invalid')
          }
        }

        const accessOrRefreshToken = await promise

        if (isAfter(new Date(), new Date(accessOrRefreshToken.expires_in))) {
          throw new Error('Token is expired')
        }

        reply.code(200).send({
          active: true,
          scope: 'read write dolphin',
          client_id: accessOrRefreshToken.client_id,
          username: 'replace_with_email',
          token_type: tokenTypeHint,
          exp: getUnixTime(new Date(accessOrRefreshToken.expires_in)),
          iat: getUnixTime(new Date(accessOrRefreshToken.created_at)),
          sub: 'replace_with_user_id',
          aud: ['https://protected.example.com'],
          iss: 'https://server.example.com',
          jti: accessOrRefreshToken.id
        })
      } catch (error) {
        reply.code(200).send({
          active: false
        })
      }
    }
  )

  fastify.post<PostIntrospectRoute>(
    '/revoke',
    {
      attachValidation: true,
      onRequest: fastify.basicAuth,
      schema: postIntrospectSchema
    },
    async (request, reply) => {
      try {
        if (request.validationError) {
          reply.code(200).send({
            active: false
          })

          return
        }

        let promise: ReturnType<typeof fastify.refreshTokenService.get>

        const tokenTypeHint = request.body.token_type_hint

        if (tokenTypeHint === 'access_token') {
          promise = fastify.accessTokenService.get({
            token: request.body.token
          })
        } else if (tokenTypeHint === 'refresh_token') {
          promise = fastify.refreshTokenService.get({
            token: request.body.token
          })
        } else {
          const result = (
            await Promise.allSettled([
              fastify.accessTokenService.get({
                token: request.body.token
              }),
              fastify.refreshTokenService.get({
                token: request.body.token
              })
            ])
          ).find(({ status }) => status === 'fulfilled')

          if (result?.status === 'fulfilled') {
            promise = Promise.resolve(result.value)
          } else {
            throw new Error('Token is expired or invalid')
          }
        }

        const accessOrRefreshToken = await promise

        const credentials = decodeBasic(request.headers.authorization!)

        if (accessOrRefreshToken.client_id !== credentials?.clientId) {
          reply.code(400).send({
            error: 'invalid_grant',
            error_description: 'Invalid client_id'
          })

          return
        }

        await fastify.authorizationCodeService.delete({
          id: accessOrRefreshToken.authorization_code_id
        })

        reply.code(200).send()
      } catch (error) {
        reply.code(200).send()
      }
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
