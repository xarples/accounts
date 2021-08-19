import { FastifySchema } from 'fastify'
import S from 'fluent-json-schema'

export const authorizationRequestSchema: FastifySchema = {
  querystring: S.object()
    .prop(
      'response_type',
      S.string()
        .required()
        .enum(['code'])
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
    .prop('response_mode', S.string().enum(['web_message']))
    .prop(
      'resource',
      S.oneOf([S.string(), S.array().items(S.string())]).required()
    )
    .prop('scope', S.string())
    .prop('state', S.string())
}
