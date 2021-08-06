import { FastifySchema } from 'fastify'
import S from 'fluent-json-schema'
import { clientResponseSchema } from './client-response'
import { errorResponseSchema } from './error-response'

export const deleteClientSchema: FastifySchema = {
  params: S.object().prop('id', S.string()),
  response: {
    200: clientResponseSchema,
    400: errorResponseSchema
  }
}
