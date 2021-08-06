import { FastifySchema } from 'fastify'
import S from 'fluent-json-schema'
import { clientResponseSchema } from './client-response'

export const getClientSchema: FastifySchema = {
  params: S.object()
    .prop('id', S.string())
    .prop('client_id', S.string()),
  response: {
    200: clientResponseSchema
  }
}
