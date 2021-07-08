import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import routes from './routes'
import OauthMetadataService from './service'

declare module 'fastify' {
  interface FastifyInstance {
    oauthMetadataService: OauthMetadataService
  }
}

const service = new OauthMetadataService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('oauthMetadataService', service)
  fastify.register(routes)
}

export default fp(plugin, '3.x')
