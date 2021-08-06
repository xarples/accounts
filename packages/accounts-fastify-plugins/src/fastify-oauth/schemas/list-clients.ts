import { FastifySchema } from 'fastify'
import S from 'fluent-json-schema'
import { clientResponseSchema } from './client-response'

export const listClientsSchema: FastifySchema = {
  querystring: S.object().prop('client_id', S.string()),
  response: {
    200: S.array().items(clientResponseSchema)
  }
}
