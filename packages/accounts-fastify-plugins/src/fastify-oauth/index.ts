import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import accessToken from './access-token'
import authorizationCode from './authorization-code'
import client from './client'
import core from './core'
import oauthMetadata from './metadata'
import refreshToken from './refresh-token'
import basicAuth from '../fastify-basic-auth'

declare module 'fastify' {
  interface FastifyInstance {}
}

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.register(basicAuth)
  fastify.register(accessToken)
  fastify.register(authorizationCode)
  fastify.register(client)
  fastify.register(oauthMetadata)
  fastify.register(refreshToken)
  fastify.register(core)
}

export default fp(plugin, '3.x')
