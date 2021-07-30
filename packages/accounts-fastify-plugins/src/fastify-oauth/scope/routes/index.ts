import { FastifyPluginAsync } from 'fastify'

// import { listScopeRequestSchema } from '../schemas'

import { ListScopesRequest } from '../types'

const routes: FastifyPluginAsync = async fastify => {
  fastify.get<ListScopesRequest>(
    '/scopes',
    // { schema: listScopeRequestSchema },
    async (_, reply) => {
      const scopes = await fastify.scopeService.list()

      reply.code(200).send(scopes)
    }
  )
}

export default routes
