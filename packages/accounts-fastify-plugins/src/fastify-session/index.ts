import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import fastifyCookie from 'fastify-cookie'
import fastifySession from 'fastify-session'

declare module 'fastify' {
  interface FastifyRequest {
    session: Session
    sessionStore: fastifySession.SessionStore
    destroySession(callback: (err?: Error) => void): void
  }
}

const plugin: FastifyPluginAsync<fastifySession.Options> = async (
  fastify,
  options
) => {
  fastify.register(fastifyCookie)
  fastify.register(fastifySession, options)
}

export default fp(plugin, {
  fastify: '3.x'
})
