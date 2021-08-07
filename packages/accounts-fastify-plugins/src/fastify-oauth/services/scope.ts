import { promisify } from 'util'
import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import fp from 'fastify-plugin'
import client from '@xarples/accounts-client'
import { Scope, ScopeList } from '@xarples/accounts-proto-loader'
import { ScopeResponse } from '../types'

const getRefreshToken = promisify<Scope, Scope>(client.getScope.bind(client))
const listRefreshTokens = promisify<Scope, ScopeList>(
  client.listScopes.bind(client)
)

type Options = {
  [K in keyof Scope.AsObject]?: Scope.AsObject[K] // so that it retains the types
}

interface Context {
  request: FastifyRequest
  reply: FastifyReply
}

export class ScopeService {
  context: Context | undefined

  setContext(context: Context) {
    this.context = context
  }

  async get(options: Options) {
    try {
      const message = new Scope()

      message.setId(options.id!)
      message.setName(options.name!)

      const found = await getRefreshToken(message)

      return this.reducer(found.toObject())
    } catch (error) {
      return null
    }
  }

  async list() {
    const message = new Scope()

    const list = await listRefreshTokens(message)

    return list.getScopeList().map(code => this.reducer(code.toObject()))
  }

  async verify(scopes: string[]) {
    const message = new Scope()
    const list = await listRefreshTokens(message)
    const scopeList = list.getScopeList().map(scope => scope.getName())
    const isScopeValid = scopes.every(scope => scopeList.includes(scope))

    return isScopeValid
  }

  reducer(options: Scope.AsObject): ScopeResponse {
    return {
      id: options.id,
      name: options.name,
      description: options.description,
      created_at: options.createdAt,
      updated_at: options.updatedAt
    }
  }
}

const plugin: FastifyPluginAsync = async fastify => {
  const service = new ScopeService()

  fastify.addHook('preHandler', (request, reply, done) => {
    service.setContext({ request, reply })
    done()
  })

  fastify.decorate('scopeService', service)
}

export const scopeService = fp(plugin, '3.x')
