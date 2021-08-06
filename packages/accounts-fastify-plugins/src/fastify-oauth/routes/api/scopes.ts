import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

import { ListScopesRequest } from '../../types'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.get<ListScopesRequest>('/api/scopes', async (_, reply) => {
    const scopes = await fastify.scopeService.list()

    reply.code(200).send(scopes)
  })
}

export const scopes = fp(plugin, '3.x')
