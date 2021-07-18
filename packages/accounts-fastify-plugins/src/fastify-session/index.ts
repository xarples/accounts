import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import FastifySessionPlugin from 'fastify-session'
import fastifySession from 'fastify-session'
import { authPreHandler } from './decorators'
import routes from './routes'

declare module 'fastify' {
  interface FastifyInstance {
    authPreHandler: typeof authPreHandler
  }
  interface FastifyRequest {
    session: Session
    sessionStore: FastifySessionPlugin.SessionStore
    destroySession(callback: (err?: Error) => void): void
  }
}

const plugin: FastifyPluginAsync<FastifySessionPlugin.Options> = async (
  fastify,
  options
) => {
  fastify.decorate('authPreHandler', authPreHandler)
  fastify.register(fastifySession, options)
  fastify.register(routes)
}

export default fp(plugin, {
  fastify: '3.x'
})
