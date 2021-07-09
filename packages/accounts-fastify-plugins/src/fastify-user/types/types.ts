import { User } from '@xarples/accounts-proto-loader/dist'

export interface PostSignInRoute {
  Body: {
    email: string
    password: string
  }
}

export interface PostSignUpRoute {
  Body: User.AsObject
}
