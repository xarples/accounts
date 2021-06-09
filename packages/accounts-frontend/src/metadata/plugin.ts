import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import routes from './routes'

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.register(routes)
}

export default fp(plugin, '3.x')
