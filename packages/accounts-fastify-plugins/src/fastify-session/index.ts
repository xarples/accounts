import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import FastifySessionPlugin from 'fastify-session'
import fastifySession from 'fastify-session'

declare module 'fastify' {
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
  fastify.register(fastifySession, {
    // secret: 'a secret with minimum length of 32 characters',
    // cookie: { secure: false },
    // saveUninitialized: false,
    ...options
  })
}

export default fp(plugin, {
  fastify: '3.x'
})
