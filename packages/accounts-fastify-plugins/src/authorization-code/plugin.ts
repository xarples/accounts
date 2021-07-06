import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import AuthorizationCodeService from './service'

declare module 'fastify' {
  interface FastifyInstance {
    authorizationCodeService: AuthorizationCodeService
  }
}

const service = new AuthorizationCodeService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('authorizationCodeService', service)
}

export default fp(plugin, '3.x')
