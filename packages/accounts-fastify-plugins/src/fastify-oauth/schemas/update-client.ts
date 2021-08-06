import { FastifySchema } from 'fastify'
import S from 'fluent-json-schema'
import { clientResponseSchema } from './client-response'
import { errorResponseSchema } from './error-response'

export const updateClientSchema: FastifySchema = {
  body: S.object()
    .prop('name', S.string().required())
    .prop('description', S.string().required())
    .prop(
      'redirect_uris',
      S.array()
        .items(S.string())
        .required()
    ),
  params: S.object().prop('id', S.string()),
  response: {
    200: clientResponseSchema,
    400: errorResponseSchema
  }
}
