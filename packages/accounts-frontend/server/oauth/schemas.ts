import { FastifySchema } from 'fastify'
import S from 'fluent-json-schema'

export const getAuthorizeSchema: FastifySchema = {
  querystring: S.object()
    .prop(
      'response_type',
      S.string()
        .required()
        .enum(['code'])
        .title('Hello')
        .description('Hello 2')
    )
    .prop('client_id', S.string().required())
    .prop('code_challenge', S.string().required())
    .prop(
      'code_challenge_method',
      S.string()
        .enum(['plain', 'S256'])
        .default('plain')
    )
    .prop('redirect_uri', S.string().required())
    .prop('scope', S.string())
    .prop('state', S.string())
}
