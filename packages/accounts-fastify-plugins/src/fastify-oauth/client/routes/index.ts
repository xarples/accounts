import { FastifyPluginAsync } from 'fastify'

import {
  createClientSchema,
  getClientSchema,
  listClientsSchema,
  updateClientSchema,
  updateClientSecretSchema,
  deleteClientSchema
} from '../schemas'

import {
  CreateRoute,
  GetRoute,
  ListRoute,
  UpdateRoute,
  UpdateSecretRoute,
  DeleteRoute
} from '../types'

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
        description: request.body.description,
        type: request.body.type,
        redirectUriList: request.body.redirect_uris
      })

      reply.code(201).send(client)
    }
  )

  fastify.get<ListRoute>(
    '/clients',
    { schema: listClientsSchema },
    async (request, reply) => {
      const clients = await fastify.clientService.list({
        clientId: request.query.client_id
      })

      reply.code(200).send(clients)
    }
  )

  fastify.get<GetRoute>(
    '/clients/:id',
    { schema: getClientSchema },
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
        name: request.body.name,
        description: request.body.description,
        redirectUriList: request.body.redirect_uris
      })
    }
  )

  fastify.patch<UpdateSecretRoute>(
    '/clients/:id/secret',
    { schema: updateClientSecretSchema },
    async request => {
      return fastify.clientService.updateSecret({
        id: request.params.id
      })
    }
  )

  fastify.delete<DeleteRoute>(
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
