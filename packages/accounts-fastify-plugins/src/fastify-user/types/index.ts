import { User } from '@xarples/accounts-protobuf/dist'

export interface SignUpRequest {
  Body: User.AsObject
}
