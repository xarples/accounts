import { FastifySchema } from 'fastify'
import S from 'fluent-json-schema'

export const tokenRequestSchema: FastifySchema = {
  body: S.object()
    .prop(
      'grant_type',
      S.string()
        .enum(['authorization_code', 'client_credentials', 'refresh_token'])
        .required()
    )

    .prop('code', S.string())
    .prop('redirect_uri', S.string())
    .prop('client_id', S.string())
    .prop('code_verifier', S.string())
    .prop('refresh_token', S.string())
    .prop('nonce', S.string())
}
