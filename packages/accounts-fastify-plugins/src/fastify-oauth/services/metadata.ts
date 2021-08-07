import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import fp from 'fastify-plugin'

interface Context {
  request: FastifyRequest
  reply: FastifyReply
}

export class MetadataService {
  context: Context | undefined

  setContext(context: Context) {
    this.context = context
  }

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

const plugin: FastifyPluginAsync = async fastify => {
  const service = new MetadataService()

  fastify.addHook('preHandler', (request, reply, done) => {
    service.setContext({ request, reply })
    done()
  })

  fastify.decorate('metadataService', service)
}

export const metadataService = fp(plugin, '3.x')
