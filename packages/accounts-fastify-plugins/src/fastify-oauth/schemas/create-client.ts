import { FastifySchema } from 'fastify'
import S from 'fluent-json-schema'
import { clientResponseSchema } from './client-response'
import { errorResponseSchema } from './error-response'

export const createClientSchema: FastifySchema = {
  body: S.object()
    .prop('client_name', S.string().required())
    .prop('client_description', S.string().required())
    .prop('application_type', S.string().required())
    .prop(
      'redirect_uris',
      S.array()
        .items(S.string())
        .required()
    ),
  response: {
    200: clientResponseSchema,
    400: errorResponseSchema
  }
}
