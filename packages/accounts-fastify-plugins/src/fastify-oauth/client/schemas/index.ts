import { FastifySchema } from 'fastify'
import S from 'fluent-json-schema'

const clientSchema = S.object()
  .prop('id', S.string())
  .prop('client_id', S.string())
  .prop('client_secret', S.string())
  .prop('client_name', S.string())
  .prop('client_description', S.string())
  .prop('type', S.string())
  .prop('redirect_uris', S.array().items(S.string()))
  .prop('client_secret_expires_at', S.string())
  .prop('created_at', S.string())
  .prop('updated_at', S.string())

const errorSchema = S.object()
  .prop('error', S.string())
  .prop('error_description', S.string())

export const createClientSchema: FastifySchema = {
  body: S.object()
    .prop('name', S.string().required())
    .prop('description', S.string().required())
    .prop('type', S.string().required())
    .prop(
      'redirect_uris',
      S.array()
        .items(S.string())
        .required()
    ),
  response: {
    200: clientSchema,
    400: errorSchema
  }
}

export const getClientSchema: FastifySchema = {
  params: S.object()
    .prop('id', S.string())
    .prop('client_id', S.string()),
  response: {
    200: clientSchema
  }
}

export const listClientsSchema: FastifySchema = {
  querystring: S.object().prop('client_id', S.string()),
  response: {
    200: S.array().items(clientSchema)
  }
}

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
    200: clientSchema,
    400: errorSchema
  }
}

export const updateClientSecretSchema: FastifySchema = {
  params: S.object().prop('id', S.string()),
  response: {
    200: clientSchema,
    400: errorSchema
  }
}

export const deleteClientSchema: FastifySchema = {
  params: S.object().prop('id', S.string()),
  response: {
    200: clientSchema,
    400: errorSchema
  }
}
