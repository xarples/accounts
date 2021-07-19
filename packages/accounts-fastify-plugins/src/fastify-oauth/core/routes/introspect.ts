import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { getUnixTime } from 'date-fns'
import { postIntrospectSchema } from '../schemas'
import { IntrospectRequest } from '../types'
import { AccessTokenResponse } from '../../access-token/types'
import { RefreshTokenResponse } from '../../refresh-token/types'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.post<IntrospectRequest>(
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

        let accessOrRefreshToken:
          | AccessTokenResponse
          | RefreshTokenResponse
          | null

        const tokenTypeHint = request.body.token_type_hint

        if (tokenTypeHint === 'access_token') {
          accessOrRefreshToken = await fastify.accessTokenService.get({
            token: request.body.token
          })
        } else if (tokenTypeHint === 'refresh_token') {
          accessOrRefreshToken = await fastify.refreshTokenService.get({
            token: request.body.token
          })
        } else {
          accessOrRefreshToken =
            (await fastify.accessTokenService.get({
              token: request.body.token
            })) ||
            (await fastify.refreshTokenService.get({
              token: request.body.token
            }))
        }

        if (!accessOrRefreshToken) {
          reply.code(400).send({
            error: 'invalid_grant',
            error_description: 'Invalid token'
          })

          return
        }

        // it is possible to validate whether an access or refresh token has expired or not
        // using the accessTokenService or the refreshTokenService.
        if (fastify.accessTokenService.isExpired(accessOrRefreshToken)) {
          throw new Error('Token is expired')
        }

        const user = await fastify.userService.get({
          id: accessOrRefreshToken.user_id
        })

        reply.code(200).send({
          active: true,
          scope: 'read write dolphin',
          client_id: accessOrRefreshToken.client_id,
          username: user!.email,
          token_type: tokenTypeHint,
          exp: getUnixTime(new Date(accessOrRefreshToken.expires_in)),
          iat: getUnixTime(new Date(accessOrRefreshToken.created_at)),
          sub: accessOrRefreshToken.user_id,
          aud: ['https://protected.example.com'],
          iss: 'https://authorization-server.com',
          jti: accessOrRefreshToken.id
        })
      } catch (error) {
        reply.code(200).send({
          active: false
        })
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
