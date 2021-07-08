import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { authPreHandler } from './hooks'
import routes from './routes'
import UserService from './service'

declare module 'fastify' {
  interface FastifyInstance {
    userService: UserService
    authPreHandler: typeof authPreHandler
  }
}

const service = new UserService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('userService', service)
  fastify.decorate('authPreHandler', authPreHandler)
  fastify.register(routes, { prefix: 'api' })
}

export default fp(plugin, {
  fastify: '3.x'
})
