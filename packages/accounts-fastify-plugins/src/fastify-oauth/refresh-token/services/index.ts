import { promisify } from 'util'
import client from '@xarples/accounts-client'
import { RefreshToken, RefreshTokenList } from '@xarples/accounts-proto-loader'

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

    message.setClientId(options.clientId!)
    message.setToken(options.token!)

    const created = await createRefreshToken(message)

    return this.reducer(created.toObject())
  }

  async get(options: Options) {
    const message = new RefreshToken()

    message.setId(options.id!)
    message.setToken(options.token!)

    const found = await getRefreshToken(message)

    return this.reducer(found.toObject())
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

  reducer(options: RefreshToken.AsObject) {
    return {
      id: options.id,
      client_id: options.client?.clientId,
      token: options.token,
      expires_in: options.expiresIn,
      created_at: options.createdAt,
      updated_at: options.updatedAt
    }
  }
}
