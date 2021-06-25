import { promisify } from 'util'
import client from '@xarples/accounts-client'
import { User, UserList } from '@xarples/accounts-proto-loader'

type Options = {}

export default class OauthService {
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

  reducer(options: User.AsObject) {
    return {}
  }
}
