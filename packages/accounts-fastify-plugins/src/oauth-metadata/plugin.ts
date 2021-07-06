import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import OauthMetadataService from './service'

declare module 'fastify' {
  interface FastifyInstance {
    oauthMetadataService: OauthMetadataService
  }
}

const service = new OauthMetadataService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('oauthMetadataService', service)
}

export default fp(plugin, '3.x')
