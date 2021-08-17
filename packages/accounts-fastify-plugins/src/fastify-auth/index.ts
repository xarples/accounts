import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { authPreHandler } from './hooks'
import routes from './routes'

declare module 'fastify' {
  interface FastifyInstance {
    authPreHandler: typeof authPreHandler
  }
  interface FastifyRequest {}
}

const plugin: FastifyPluginAsync = async fastify => {
  fastify.decorate('authPreHandler', authPreHandler)
  fastify.register(routes)
}

export default fp(plugin, {
  fastify: '3.x'
})
