import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { SignUpRequest } from '../types'

declare module 'fastify' {
  interface FastifyInstance {}
}

const plugin: FastifyPluginAsync = async fastify => {
  fastify.post<SignUpRequest>('/api/users', async (request, reply) => {
    const user = await fastify.userService.create(request.body)

    reply.send(user)
  })

  fastify.get('/api/users/me', async (request, reply) => {
    reply.send(request.session.user)
  })
}

export default fp(plugin, '3.x')
