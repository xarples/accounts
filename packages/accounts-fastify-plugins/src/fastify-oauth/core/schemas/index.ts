import { FastifySchema } from 'fastify'
import S from 'fluent-json-schema'

export const authorizationRequestSchema: FastifySchema = {
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

export const postTokenSchema: FastifySchema = {
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
}

export const postIntrospectSchema: FastifySchema = {
  body: S.object()
    .prop('token', S.string().required())
    .prop('token_type_hint', S.string().enum(['access_token', 'refresh_token']))
}

export const postRevokeSchema: FastifySchema = {
  body: S.object()
    .prop('token', S.string().required())
    .prop('token_type_hint', S.string().enum(['access_token', 'refresh_token']))
}
