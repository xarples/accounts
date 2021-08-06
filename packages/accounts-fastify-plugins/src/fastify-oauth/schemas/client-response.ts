import S from 'fluent-json-schema'

export const clientResponseSchema = S.object()
  .prop('id', S.string())
  .prop('client_id', S.string())
  .prop('client_secret', S.string())
  .prop('client_name', S.string())
  .prop('client_description', S.string())
  .prop('application_type', S.string())
  .prop('redirect_uris', S.array().items(S.string()))
  .prop('client_secret_expires_at', S.string())
  .prop('created_at', S.string())
  .prop('updated_at', S.string())
