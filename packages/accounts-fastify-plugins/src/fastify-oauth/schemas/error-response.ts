import S from 'fluent-json-schema'

export const errorResponseSchema = S.object()
  .prop('error', S.string())
  .prop('error_description', S.string())
