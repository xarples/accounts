import { FastifySchema } from 'fastify'
import S from 'fluent-json-schema'

export const revokeTokenSchema: FastifySchema = {
  body: S.object()
    .prop('token', S.string().required())
    .prop('token_type_hint', S.string().enum(['access_token', 'refresh_token']))
}
