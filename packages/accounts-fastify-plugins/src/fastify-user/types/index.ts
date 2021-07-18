import { User } from '@xarples/accounts-proto-loader/dist'

export interface SignUpRequest {
  Body: User.AsObject
}
