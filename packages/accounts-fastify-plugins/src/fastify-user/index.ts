import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import routes from './routes'
import { UserService } from './services'

declare module 'fastify' {
  interface FastifyInstance {
    userService: UserService
  }
}

const service = new UserService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('userService', service)
  fastify.register(routes)
}

export default fp(plugin, {
  fastify: '3.x'
})
