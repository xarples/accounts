import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { ClientService } from './services'
import routes from './routes'
import { clientAuthPreHandler } from './decorators'

declare module 'fastify' {
  interface FastifyInstance {
    clientService: ClientService
    clientAuthPreHandler: typeof clientAuthPreHandler
  }
}

const service = new ClientService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.addHook('onRequest', (request, _, done) => {
    service.setContext({ request })
    done()
  })

  fastify.decorate('clientService', service)
  fastify.decorate('clientAuthPreHandler', clientAuthPreHandler)
  fastify.register(routes, { prefix: 'api' })
}

export default fp(plugin, '3.x')
