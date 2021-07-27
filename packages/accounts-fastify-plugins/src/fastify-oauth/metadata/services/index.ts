export class OauthMetadataService {
  async get() {
    return {
      issuer: 'https://accounts.xarples.com',
      authorization_endpoint: 'https://accounts.xarples.com/authorize',
      token_endpoint: 'https://accounts.xarples.com/token',
      token_endpoint_auth_methods_supported: [
        'client_secret_basic',
        'private_key_jwt'
      ],
      userinfo_endpoint: 'https://accounts.xarples.com/userinfo',
      registration_endpoint: 'https://accounts.xarples.com/signup',
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
}
