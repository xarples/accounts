import { promisify } from 'util'
import client from '@xarples/accounts-client'
import { AccessToken, AccessTokenList } from '@xarples/accounts-proto-loader'
import { isAfter } from 'date-fns'
import { AccessTokenResponse } from '../types'

const createAccessToken = promisify<AccessToken, AccessToken>(
  client.createAccessToken.bind(client)
)
const getAccessToken = promisify<AccessToken, AccessToken>(
  client.getAccessToken.bind(client)
)
const listAccessTokens = promisify<AccessToken, AccessTokenList>(
  client.listAccessTokens.bind(client)
)

const deleteAccessToken = promisify<AccessToken, AccessToken>(
  client.deleteAccessToken.bind(client)
)

type Options = {
  [K in keyof AccessToken.AsObject]?: AccessToken.AsObject[K] // so that it retains the types
}

export class AccessTokenService {
  async create(options: Options) {
    const message = new AccessToken()

    message.setAuthorizationCodeId(options.authorizationCodeId!)
    message.setUserId(options.userId!)
    message.setClientId(options.clientId!)
    message.setToken(options.token!)

    const created = await createAccessToken(message)

    return this.reducer(created.toObject())
  }

  async get(options: Options) {
    try {
      const message = new AccessToken()

      message.setId(options.id!)
      message.setToken(options.token!)

      const found = await getAccessToken(message)

      return this.reducer(found.toObject())
    } catch (error) {
      return null
    }
  }

  async list(options: Options) {
    const message = new AccessToken()

    message.setClientId(options.clientId!)

    const list = await listAccessTokens(message)

    return list.getAccessTokenList().map(code => this.reducer(code.toObject()))
  }

  async delete(options: Options) {
    const message = new AccessToken()

    message.setId(options.id!)
    message.setToken(options.token!)

    const deleted = await deleteAccessToken(message)

    return this.reducer(deleted.toObject())
  }

  isExpired(token: AccessTokenResponse) {
    return isAfter(new Date(), new Date(token.expires_in))
  }

  reducer(options: AccessToken.AsObject): AccessTokenResponse {
    return {
      id: options.id,
      authorization_code_id: options.authorizationCodeId,
      user_id: options.userId,
      client_id: options.client!.clientId,
      token: options.token,
      expires_in: options.expiresIn,
      created_at: options.createdAt,
      updated_at: options.updatedAt
    }
  }
}
