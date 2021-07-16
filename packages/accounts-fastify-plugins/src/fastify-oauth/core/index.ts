import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

import * as routes from './routes'

declare module 'fastify' {
  interface FastifyInstance {}
}

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.register(routes.authorize)
  fastify.register(routes.introspect)
  fastify.register(routes.revoke)
  fastify.register(routes.token)
}

export default fp(plugin, '3.x')
