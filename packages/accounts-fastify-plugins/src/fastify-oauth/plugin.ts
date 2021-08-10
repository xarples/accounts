import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import {
  AccessTokenService,
  AuthorizationCodeService,
  ClientService,
  IdTokenService,
  MetadataService,
  RefreshTokenService,
  ScopeService,
  accessTokenService,
  authorizationCodeService,
  clientService,
  metadataService,
  refreshTokenService,
  scopeService,
  idTokenService
} from './services'

import {
  authorize,
  clients,
  introspect,
  metadata,
  revoke,
  scopes,
  token
} from './routes'

import { clientAuthPreHandler } from './hooks'

declare module 'fastify' {
  interface FastifyInstance {
    clientAuthPreHandler: typeof clientAuthPreHandler
    idTokenService: IdTokenService
    accessTokenService: AccessTokenService
    authorizationCodeService: AuthorizationCodeService
    clientService: ClientService
    metadataService: MetadataService
    refreshTokenService: RefreshTokenService
    scopeService: ScopeService
  }
  interface FastifyRequest {
    client?: {
      clientId: string
    }
  }
}

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('clientAuthPreHandler', clientAuthPreHandler)
  fastify.register(accessTokenService)
  fastify.register(authorizationCodeService)
  fastify.register(clientService)
  fastify.register(idTokenService)
  fastify.register(metadataService)
  fastify.register(refreshTokenService)
  fastify.register(scopeService)
  fastify.register(authorize)
  fastify.register(clients)
  fastify.register(introspect)
  fastify.register(metadata)
  fastify.register(revoke)
  fastify.register(scopes)
  fastify.register(token)
}

export const fastifyOauth = fp(plugin, '3.x')
