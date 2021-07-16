import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { isAfter, getUnixTime } from 'date-fns'
import { postIntrospectSchema } from '../schemas'
import { PostIntrospectRoute } from '../types'

const plugin: FastifyPluginAsync = async fastify => {
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
