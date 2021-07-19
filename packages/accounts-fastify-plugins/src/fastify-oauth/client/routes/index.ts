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
  CreateClientRequest,
  GetClientRequest,
  ListClientsRequest,
  UpdateClientRequest,
  UpdateClientSecretRequest,
  DeleteClientRequest
} from '../types'

const routes: FastifyPluginAsync = async fastify => {
  fastify.post<CreateClientRequest>(
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
        clientName: request.body.client_name,
        clientDescription: request.body.client_description,
        applicationType: request.body.application_type,
        redirectUriList: request.body.redirect_uris
      })

      reply.code(201).send(client)
    }
  )

  fastify.get<ListClientsRequest>(
    '/clients',
    { schema: listClientsSchema },
    async (request, reply) => {
      const clients = await fastify.clientService.list({
        clientId: request.query.client_id
      })

      reply.code(200).send(clients)
    }
  )

  fastify.get<GetClientRequest>(
    '/clients/:id',
    { schema: getClientSchema },
    async (request, reply) => {
      const client = await fastify.clientService.get({
        id: request.params.id
      })

      reply.code(200).send(client)
    }
  )

  fastify.put<UpdateClientRequest>(
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
        clientName: request.body.client_name,
        clientDescription: request.body.client_description,
        redirectUriList: request.body.redirect_uris
      })
    }
  )

  fastify.patch<UpdateClientSecretRequest>(
    '/clients/:id/secret',
    { schema: updateClientSecretSchema },
    async request => {
      return fastify.clientService.updateSecret({
        id: request.params.id
      })
    }
  )

  fastify.delete<DeleteClientRequest>(
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
