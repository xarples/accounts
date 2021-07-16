import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { decodeBasic } from '@xarples/accounts-utils'
import { postRevokeSchema } from '../schemas'
import { PostRevokeRoute } from '../types'

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
