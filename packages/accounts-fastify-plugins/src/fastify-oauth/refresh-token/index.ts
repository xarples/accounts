import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { RefreshTokenService } from './services'

declare module 'fastify' {
  interface FastifyInstance {
    refreshTokenService: RefreshTokenService
  }
}

const service = new RefreshTokenService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('refreshTokenService', service)
}

export default fp(plugin, '3.x')
