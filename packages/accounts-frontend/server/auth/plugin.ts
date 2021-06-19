import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.get('/logout', (request, reply) => {
    reply.send({})
  })

  fastify.post('/signin', (request, reply) => {
    reply.send({})
  })

  fastify.post('/signup', (request, reply) => {
    reply.send({})
  })
}

export default fp(plugin, '3.x')
