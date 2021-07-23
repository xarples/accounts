import { RefreshToken, Scope } from '@prisma/client'
import { isAfter } from 'date-fns'
import { createClient } from '../prisma'

interface HasScopesOptions {
  token: RefreshToken & {
    Scopes: Scope[]
  }
  scopes: string[]
}

const client = createClient()

export const service = {
  ...client.refreshToken,

  async verify(token: string) {
    const refreshToken = await client.refreshToken.findUnique({
      where: { token },
      include: { Scopes: true }
    })

    if (!refreshToken) {
      return undefined
    }

    if (this.hasExpired(refreshToken)) {
      return undefined
    }

    return refreshToken
  },

  hasExpired(token: RefreshToken) {
    return isAfter(new Date(), new Date(token.expires_in))
  },

  hasScopes(options: HasScopesOptions) {
    const scopes = options.token.Scopes.map(scope => scope.name)

    return options.scopes.every(scope => scopes.includes(scope))
  }
}
