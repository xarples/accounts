import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { decodeBasic } from '@xarples/accounts-utils'
import { postRevokeSchema } from '../schemas'
import { PostRevokeRoute } from '../types'
import { AccessTokenResponse } from '../../access-token/types'
import { RefreshTokenResponse } from '../../refresh-token/types'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.post<PostRevokeRoute>(
    '/revoke',
    {
      attachValidation: true,
      onRequest: fastify.basicAuth,
      schema: postRevokeSchema
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

        const credentials = decodeBasic(request.headers.authorization!)

        if (accessOrRefreshToken.client_id !== credentials?.clientId) {
          reply.code(400).send({
            error: 'invalid_grant',
            error_description: 'Invalid client'
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
