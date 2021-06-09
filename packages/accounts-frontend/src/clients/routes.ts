import { FastifyPluginAsync } from 'fastify'
import {
  createClient as createClientSchema,
  getClient as getClientSchema,
  listClients as listClientsSchema,
  updateClient as updateClientSchema,
  updateSecret as updateClientSecretSchema,
  deleteClient as deleteClientSchema
} from './schemas'
import { CreateRoute, GetRoute, ListRoute, UpdateRoute } from './types'

const routes: FastifyPluginAsync = async fastify => {
  fastify.post<CreateRoute>(
    '/clients',
    { schema: createClientSchema, attachValidation: true },
    async (request, reply) => {
      if (request.validationError) {
        return reply.code(400).send({
          error: 'invalid_client_metadata',
          error_description: request.validationError.message
        })
      }

      const client = await fastify.clientService.create({
        name: request.body.name,
        description: request.body.description
      })

      reply.code(201).send(client)
    }
  )

  fastify.get<ListRoute>(
    '/clients',
    { schema: listClientsSchema },
    async (request, reply) => {
      const clients = await fastify.clientService.list({})

      reply.code(200).send(clients)
    }
  )

  fastify.get<GetRoute>(
    '/clients/:id',
    { schema: createClientSchema },
    async (request, reply) => {
      const client = await fastify.clientService.get({
        id: request.params.id
      })

      reply.code(200).send(client)
    }
  )

  fastify.put<UpdateRoute>(
    '/clients/:id',
    { schema: updateClientSchema, attachValidation: true },
    async (request, reply) => {
      if (request.validationError) {
        return reply.code(400).send({
          error: 'invalid_client_metadata',
          error_description: request.validationError.message
        })
      }

      return fastify.clientService.update({
        id: request.params.id,
        redirectUrisList: request.body.redirect_uris,
        logoUri: request.body.logo_uri,
        policyUri: request.body.policy_uri,
        websiteUri: request.body.website_uri
      })
    }
  )

  fastify.patch<UpdateRoute>(
    '/clients/:id/secret',
    { schema: updateClientSecretSchema },
    async request => {
      return fastify.clientService.updateSecret({
        id: request.params.id
      })
    }
  )

  fastify.delete<UpdateRoute>(
    '/clients/:id',
    { schema: deleteClientSchema },
    async request => {
      return fastify.clientService.delete({
        id: request.params.id
      })
    }
  )
}

export default routes
