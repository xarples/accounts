import { promisify } from 'util'
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

export class ScopeService {
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
