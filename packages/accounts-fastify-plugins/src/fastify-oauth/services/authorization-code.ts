import { promisify } from 'util'
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import fp from 'fastify-plugin'
import client from '@xarples/accounts-client'
import {
  AuthorizationCode,
  AuthorizationCodeList
} from '@xarples/accounts-protobuf'
import isAfter from 'date-fns/isAfter'
import { AuthorizationCodeResponse } from '../types'

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

interface Context {
  request: FastifyRequest
  reply: FastifyReply
}

export class AuthorizationCodeService {
  context: Context | undefined

  setContext(context: Context) {
    this.context = context
  }

  async create(options: Options) {
    const message = new AuthorizationCode()

    message.setUserId(options.userId!)
    message.setClientId(options.clientId!)
    message.setCodeChallenge(options.codeChallenge!)
    message.setCodeChallengeMethod(options.codeChallengeMethod!)
    message.setRedirectUri(options.redirectUri!)
    message.setAudienceList(options.audienceList!)
    message.setScopeList(options.scopeList || [])

    const created = await createAuthorizationCode(message)

    return this.reducer(created.toObject())
  }

  async get(options: Options) {
    try {
      const message = new AuthorizationCode()

      message.setId(options.id!)
      message.setCode(options.code!)

      const found = await getAuthorizationCode(message)

      return this.reducer(found.toObject())
    } catch (error) {
      return null
    }
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

  isExpired(code: AuthorizationCodeResponse) {
    return isAfter(new Date(), new Date(code.expires_in))
  }

  reducer(options: AuthorizationCode.AsObject): AuthorizationCodeResponse {
    return {
      id: options.id,
      user_id: options.userId,
      client_id: options.clientId!,
      code: options.code,
      code_challenge: options.codeChallenge,
      code_challenge_method: options.codeChallengeMethod,
      redirect_uri: options.redirectUri,
      audience: options.audienceList,
      scopes: options.scopeList,
      expires_in: options.expiresIn,
      created_at: options.createdAt,
      updated_at: options.updatedAt
    }
  }
}

const plugin: FastifyPluginAsync = async fastify => {
  const service = new AuthorizationCodeService()

  fastify.addHook('preHandler', (request, reply, done) => {
    service.setContext({ request, reply })
    done()
  })

  fastify.decorate('authorizationCodeService', service)
}

export const authorizationCodeService = fp(plugin, '3.x')
