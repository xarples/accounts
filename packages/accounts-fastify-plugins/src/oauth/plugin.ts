import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import routes from './routes'
import accessToken from '../access-token'
import authorizationCode from '../authorization-code'
import client from '../client'
import oauthMetadata from '../oauth-metadata'
import refreshToken from '../refresh-token'

declare module 'fastify' {
  interface FastifyInstance {}
}

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.register(accessToken)
  fastify.register(authorizationCode)
  fastify.register(client)
  fastify.register(oauthMetadata)
  fastify.register(refreshToken)
  fastify.register(routes, { prefix: 'api' })
}

export default fp(plugin, '3.x')
