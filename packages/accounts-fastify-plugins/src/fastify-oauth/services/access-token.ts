import { promisify } from 'util'
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import fp from 'fastify-plugin'
import client from '@xarples/accounts-client'
import { AccessToken, AccessTokenList } from '@xarples/accounts-protobuf'
import { isAfter } from 'date-fns'
import { AccessTokenResponse } from '../types'

const createAccessToken = promisify<AccessToken, AccessToken>(
  client.createAccessToken.bind(client)
)
const getAccessToken = promisify<AccessToken, AccessToken>(
  client.getAccessToken.bind(client)
)
const listAccessTokens = promisify<AccessToken, AccessTokenList>(
  client.listAccessTokens.bind(client)
)

const deleteAccessToken = promisify<AccessToken, AccessToken>(
  client.deleteAccessToken.bind(client)
)

type Options = {
  [K in keyof AccessToken.AsObject]?: AccessToken.AsObject[K] // so that it retains the types
}

interface Context {
  request: FastifyRequest
  reply: FastifyReply
}

export class AccessTokenService {
  context: Context | undefined

  setContext(context: Context) {
    this.context = context
  }

  async create(options: Options) {
    const message = new AccessToken()

    message.setAuthorizationCodeId(options.authorizationCodeId!)
    message.setUserId(options.userId!)
    message.setClientId(options.clientId!)
    message.setToken(options.token!)
    message.setAudienceList(options.audienceList!)
    message.setScopeList(options.scopeList || [])

    const created = await createAccessToken(message)

    return this.reducer(created.toObject())
  }

  async get(options: Options) {
    try {
      const message = new AccessToken()

      message.setId(options.id!)
      message.setToken(options.token!)

      const found = await getAccessToken(message)

      return this.reducer(found.toObject())
    } catch (error) {
      return null
    }
  }

  async list(options: Options) {
    const message = new AccessToken()

    message.setClientId(options.clientId!)

    const list = await listAccessTokens(message)

    return list.getAccessTokenList().map(code => this.reducer(code.toObject()))
  }

  async delete(options: Options) {
    const message = new AccessToken()

    message.setId(options.id!)
    message.setToken(options.token!)

    const deleted = await deleteAccessToken(message)

    return this.reducer(deleted.toObject())
  }

  isExpired(token: AccessTokenResponse) {
    return isAfter(new Date(), new Date(token.expires_in))
  }

  reducer(options: AccessToken.AsObject): AccessTokenResponse {
    return {
      id: options.id,
      authorization_code_id: options.authorizationCodeId,
      client_id: options.clientId,
      user_id: options.userId,
      token: options.token,
      audience: options.audienceList,
      scopes: options.scopeList,
      expires_in: options.expiresIn,
      created_at: options.createdAt,
      updated_at: options.updatedAt
    }
  }
}

const plugin: FastifyPluginAsync = async fastify => {
  const service = new AccessTokenService()

  fastify.addHook('preHandler', (request, reply, done) => {
    service.setContext({ request, reply })
    done()
  })

  fastify.decorate('accessTokenService', service)
}

export const accessTokenService = fp(plugin, '3.x')
