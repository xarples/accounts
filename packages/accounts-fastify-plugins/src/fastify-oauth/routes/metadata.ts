import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.get('/.well-known/jwks', async (_, reply) => {
    const jwks = await fastify.metadataService.getJWKS()

    reply.code(200).send(jwks)
  })

  fastify.get('/.well-known/oauth-authorization-server', async (_, reply) => {
    const metadata = await fastify.metadataService.getMetadata()

    reply.code(200).send(metadata)
  })
}

export const metadata = fp(plugin, '3.x')
