import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import routes from './routes'
import OauthService from './service'

declare module 'fastify' {
  interface FastifyInstance {
    oauthService: OauthService
  }
}

const service = new OauthService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('oauthService', service)
  fastify.register(routes, { prefix: 'api' })
}

export default fp(plugin, '3.x')
