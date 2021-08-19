import { promisify } from 'util'
import {
  FastifyPluginAsync,
  FastifyRequest,
  FastifyReply,
  FastifyInstance
} from 'fastify'
import fp from 'fastify-plugin'
import { GetJWKSRequest, GetJWKSResponse } from '@xarples/accounts-protobuf'
import client from '@xarples/accounts-client'

interface Context {
  fastify: FastifyInstance
  request: FastifyRequest
  reply: FastifyReply
}

const host = process.env.PROD_HOST_HERE_CHANGE_THIS || 'http://localhost:5000'

const getJWKS = promisify<GetJWKSRequest, GetJWKSResponse>(
  client.getJWKS.bind(client)
)

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
      issuer: host,
      authorization_endpoint: `${host}/authorize`,
      token_endpoint: `${host}/token`,
      token_endpoint_auth_methods_supported: [
        'client_secret_basic'
        // 'private_key_jwt'
      ],
      userinfo_endpoint: `${host}/userinfo`,
      registration_endpoint: `${host}/signup`,
      scopes_supported: [
        'profile',
        'email',
        'address',
        'phone',
        'offline_access',
        ...scopes
      ],
      response_types_supported: ['code'],
      service_documentation: `${host}/docs`,
      ui_locales_supported: ['en-US']
    }
  }

  async getJWKS() {
    try {
      const message = new GetJWKSRequest()
      const response = await (await getJWKS(message)).toObject()

      return JSON.parse(response.jwks)
    } catch (error) {
      return {}
    }
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
