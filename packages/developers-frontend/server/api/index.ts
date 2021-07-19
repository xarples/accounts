import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import clients from './clients'

declare module 'fastify' {
  interface FastifyInstance {}
}

const plugin: FastifyPluginAsync = async fastify => {
  fastify.register(clients)
}

export default fp(plugin, '3.x')
