import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.get('/.well-known/oauth-authorization-server', async (_, reply) => {
    const metadata = await fastify.oauthMetadataService.get()

    reply.code(200).send(metadata)
  })
}

export default fp(plugin, '3.x')
