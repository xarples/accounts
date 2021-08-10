import {
  FastifyPluginAsync,
  FastifyRequest,
  FastifyReply,
  FastifyInstance
} from 'fastify'
import fp from 'fastify-plugin'
import jwks from '@xarples/accounts-config/config/jwks.json'
interface Context {
  fastify: FastifyInstance
  request: FastifyRequest
  reply: FastifyReply
}

export class MetadataService {
  context: Context | undefined

  setContext(context: Context) {
    this.context = context
  }

  async getMetadata() {
    const scopes = await (await this.context!.fastify.scopeService.list()).map(
      scope => scope.name
    )

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
        'offline_access',
        ...scopes
      ],
      response_types_supported: ['code'],
      service_documentation: 'http://accounts.xarples.com/docs',
      ui_locales_supported: ['en-US']
    }
  }

  async getJWKS() {
    return jwks
  }
}

const plugin: FastifyPluginAsync = async fastify => {
  const service = new MetadataService()

  fastify.addHook('preHandler', (request, reply, done) => {
    service.setContext({ request, reply, fastify })
    done()
  })

  fastify.decorate('metadataService', service)
}

export const metadataService = fp(plugin, '3.x')
