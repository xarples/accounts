import { promisify } from 'util'
import client from '@xarples/accounts-client'
import { RefreshToken, RefreshTokenList } from '@xarples/accounts-proto-loader'
import { RefreshTokenResponse } from '../types'
import isAfter from 'date-fns/isAfter'

const createRefreshToken = promisify<RefreshToken, RefreshToken>(
  client.createRefreshToken.bind(client)
)
const getRefreshToken = promisify<RefreshToken, RefreshToken>(
  client.getRefreshToken.bind(client)
)
const listRefreshTokens = promisify<RefreshToken, RefreshTokenList>(
  client.listRefreshTokens.bind(client)
)

const deleteRefreshToken = promisify<RefreshToken, RefreshToken>(
  client.deleteRefreshToken.bind(client)
)

type Options = {
  [K in keyof RefreshToken.AsObject]?: RefreshToken.AsObject[K] // so that it retains the types
}

export class RefreshTokenService {
  async create(options: Options) {
    const message = new RefreshToken()

    message.setAuthorizationCodeId(options.authorizationCodeId!)
    message.setUserId(options.userId!)
    message.setClientId(options.clientId!)
    message.setToken(options.token!)
    message.setScopeList(options.scopeList || [])

    const created = await createRefreshToken(message)

    return this.reducer(created.toObject())
  }

  async get(options: Options) {
    try {
      const message = new RefreshToken()

      message.setId(options.id!)
      message.setToken(options.token!)

      const found = await getRefreshToken(message)

      return this.reducer(found.toObject())
    } catch (error) {
      return null
    }
  }

  async list(options: Options) {
    const message = new RefreshToken()

    message.setClientId(options.clientId!)

    const list = await listRefreshTokens(message)

    return list.getRefreshTokenList().map(code => this.reducer(code.toObject()))
  }

  async delete(options: Options) {
    const message = new RefreshToken()

    message.setId(options.id!)
    message.setToken(options.token!)

    const deleted = await deleteRefreshToken(message)

    return this.reducer(deleted.toObject())
  }

  isExpired(token: RefreshTokenResponse) {
    return isAfter(new Date(), new Date(token.expires_in))
  }

  reducer(options: RefreshToken.AsObject): RefreshTokenResponse {
    return {
      id: options.id,
      authorization_code_id: options.authorizationCodeId,
      user_id: options.userId,
      client_id: options.client!.clientId,
      token: options.token,
      scopes: options.scopeList,
      expires_in: options.expiresIn,
      created_at: options.createdAt,
      updated_at: options.updatedAt
    }
  }
}
