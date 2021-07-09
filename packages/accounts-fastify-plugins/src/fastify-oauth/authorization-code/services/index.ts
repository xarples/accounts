import { promisify } from 'util'
import client from '@xarples/accounts-client'
import {
  AuthorizationCode,
  AuthorizationCodeList
} from '@xarples/accounts-proto-loader'

const createAuthorizationCode = promisify<AuthorizationCode, AuthorizationCode>(
  client.createAuthorizationCode.bind(client)
)

const getAuthorizationCode = promisify<AuthorizationCode, AuthorizationCode>(
  client.getAuthorizationCode.bind(client)
)

const listAuthorizationCodes = promisify<
  AuthorizationCode,
  AuthorizationCodeList
>(client.listAuthorizationCodes.bind(client))

const deleteAuthorizationCode = promisify<AuthorizationCode, AuthorizationCode>(
  client.deleteAuthorizationCode.bind(client)
)

type Options = {
  [K in keyof AuthorizationCode.AsObject]?: AuthorizationCode.AsObject[K] // so that it retains the types
}

export class AuthorizationCodeService {
  async create(options: Options) {
    const message = new AuthorizationCode()

    message.setClientId(options.clientId!)
    message.setCodeChallenge(options.codeChallenge!)
    message.setCodeChallengeMethod(options.codeChallengeMethod!)
    message.setRedirectUri(options.redirectUri!)

    const created = await createAuthorizationCode(message)

    return this.reducer(created.toObject())
  }

  async get(options: Options) {
    const message = new AuthorizationCode()

    message.setId(options.id!)
    message.setCode(options.code!)

    const found = await getAuthorizationCode(message)

    return this.reducer(found.toObject())
  }

  async list(options: Options) {
    const message = new AuthorizationCode()

    message.setClientId(options.clientId!)

    const list = await listAuthorizationCodes(message)

    return list
      .getAuthorizationCodeList()
      .map(code => this.reducer(code.toObject()))
  }

  async delete(options: Options) {
    const message = new AuthorizationCode()

    message.setId(options.id!)
    message.setCode(options.code!)

    const deleted = await deleteAuthorizationCode(message)

    return this.reducer(deleted.toObject())
  }

  reducer(options: AuthorizationCode.AsObject) {
    return {
      id: options.id,
      client_id: options.clientId,
      code: options.code,
      code_challenge: options.codeChallenge,
      code_challenge_method: options.codeChallengeMethod,
      redirect_uri: options.redirectUri,
      created_at: options.createdAt,
      updated_at: options.updatedAt
    }
  }
}
