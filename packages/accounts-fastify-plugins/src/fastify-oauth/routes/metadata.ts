import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.get('/.well-known/oauth-authorization-server', async (_, reply) => {
    const metadata = await fastify.metadataService.get()

    reply.code(200).send(metadata)
  })
}

export const metadata = fp(plugin, '3.x')
