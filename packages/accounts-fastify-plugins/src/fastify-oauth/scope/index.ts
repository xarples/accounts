import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { ScopeService } from './services'

declare module 'fastify' {
  interface FastifyInstance {
    scopeService: ScopeService
  }
}

const service = new ScopeService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('scopeService', service)
}

export default fp(plugin, '3.x')
