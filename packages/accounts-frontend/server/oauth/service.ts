import { promisify } from 'util'
import client from '@xarples/accounts-client'
import { AuthorizationCode, User } from '@xarples/accounts-proto-loader'

const createAuthorizationCode = promisify<AuthorizationCode, AuthorizationCode>(
  client.createAuthorizationCode.bind(client)
)

type AuthorizationCodeOptions = {
  [K in keyof AuthorizationCode.AsObject]?: AuthorizationCode.AsObject[K] // so that it retains the types
}

export default class OauthService {
  async createAuthorizationCode(options: AuthorizationCodeOptions) {
    const message = new AuthorizationCode()

    message.setClientId(options.clientId!)
    message.setCodeChallenge(options.codeChallenge!)
    message.setCodeChallengeMethod(options.codeChallengeMethod!)

    const created = await createAuthorizationCode(message)

    return this.authorizationCodeReducer(created.toObject())
  }

  async createAccessToken() {}

  async createRefreshToken() {}

  async getMetadata() {
    return {
      issuer: 'https://accounts.xarples.com',
      authorization_endpoint: 'https://accounts.xarples.com/authorize',
      token_endpoint: 'https://accounts.xarples.com/token',
      token_endpoint_auth_methods_supported: ['client_secret_basic'],
      userinfo_endpoint: 'https://accounts.xarples.com/userinfo',
      registration_endpoint: 'https://accounts.xarples.com/register',
      scopes_supported: [
        'profile',
        'email',
        'address',
        'phone',
        'offline_access'
      ],
      response_types_supported: ['code'],
      service_documentation: 'http://accounts.xarples.com/docs',
      ui_locales_supported: ['en-US']
    }
  }

  authorizationCodeReducer(options: AuthorizationCode.AsObject) {
    return {
      id: options.id,
      code: options.code,
      code_challenge: options.codeChallenge,
      code_challenge_method: options.codeChallengeMethod,
      updated_At: options.updatedAt,
      created_at: options.createdAt
    }
  }
}
