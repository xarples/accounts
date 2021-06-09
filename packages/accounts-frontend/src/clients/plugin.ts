import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import ClientService from './service'
import routes from './routes'

declare module 'fastify' {
  interface FastifyInstance {
    clientService: ClientService
  }
}

const service = new ClientService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('clientService', service)
  fastify.register(routes, { prefix: 'api' })
}

export default fp(plugin, '3.x')
