import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import AccessTokenService from './service'

declare module 'fastify' {
  interface FastifyInstance {
    accessTokenService: AccessTokenService
  }
}

const service = new AccessTokenService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('accessTokenService', service)
}

export default fp(plugin, '3.x')
