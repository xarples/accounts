import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'

import {
  createClientSchema,
  getClientSchema,
  listClientsSchema,
  updateClientSchema,
  updateClientSecretSchema,
  deleteClientSchema
} from '../../schemas'

import {
  CreateClientRequest,
  GetClientRequest,
  ListClientsRequest,
  UpdateClientRequest,
  UpdateClientSecretRequest,
  DeleteClientRequest
} from '../../types'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.post<CreateClientRequest>(
    '/api/clients',
    { schema: createClientSchema, attachValidation: true },
    async (request, reply) => {
      if (request.validationError) {
        return reply.code(400).send({
          error: 'invalid_client_metadata',
          error_description: request.validationError.message
        })
      }

      const client = await fastify.clientService.create({
        name: request.body.client_name,
        description: request.body.client_description,
        applicationType: request.body.application_type,
        redirectUriList: request.body.redirect_uris
      })

      reply.code(201).send(client)
    }
  )

  fastify.get<ListClientsRequest>(
    '/api/clients',
    { schema: listClientsSchema },
    async (request, reply) => {
      const clients = await fastify.clientService.list({})

      reply.code(200).send(clients)
    }
  )

  fastify.get<GetClientRequest>(
    '/api/clients/:id',
    { schema: getClientSchema },
    async (request, reply) => {
      const client = await fastify.clientService.get({
        id: request.params.id
      })

      reply.code(200).send(client)
    }
  )

  fastify.put<UpdateClientRequest>(
    '/api/clients/:id',
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
        name: request.body.client_name,
        description: request.body.client_description,
        redirectUriList: request.body.redirect_uris
      })
    }
  )

  fastify.patch<UpdateClientSecretRequest>(
    '/api/clients/:id/secret',
    { schema: updateClientSecretSchema },
    async request => {
      return fastify.clientService.updateSecret({
        id: request.params.id
      })
    }
  )

  fastify.delete<DeleteClientRequest>(
    '/api/clients/:id',
    { schema: deleteClientSchema },
    async request => {
      return fastify.clientService.delete({
        id: request.params.id
      })
    }
  )
}

export const clients = fp(plugin, '3.x')
