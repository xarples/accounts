import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { getAuthorizeSchema } from './schemas'
import OauthService from './service'
import { PostAuthorizeRoute, PostTokenRoute } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    oauthSerivce: OauthService
  }
}

const service = new OauthService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('oauthService', service)

  fastify.get(
    '/authorize',
    { schema: getAuthorizeSchema, attachValidation: true },
    (request, reply) => {
      if (request.validationError) {
        reply.code(400).send({
          error: 'invalid_request',
          error_description: request.validationError.message
        })

        return
      }

      fastify.nuxt.render(request.raw, reply.raw)
    }
  )

  fastify.post<PostAuthorizeRoute>('/authorize/:consent', (request, reply) => {
    reply.send({})
  })

  fastify.post<PostTokenRoute>('/token', (request, reply) => {
    reply.send({})
  })

  fastify.get(
    '/.well-known/oauth-authorization-server',
    async (request, reply) => {
      const metadata = await fastify.oauthSerivce.getMetadata()

      reply.send(metadata)
    }
  )
}

export default fp(plugin, '3.x')
