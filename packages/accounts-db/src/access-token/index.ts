import { AccessToken, Scope } from '@prisma/client'
import { isAfter } from 'date-fns'
import { createClient } from '../prisma'

interface HasScopesOptions {
  token: AccessToken & {
    Scopes: Scope[]
  }
  scopes: string[]
}

const client = createClient()

export const service = {
  ...client.accessToken,

  async verify(token: string) {
    const accessToken = await client.accessToken.findUnique({
      where: { token },
      include: { Scopes: true }
    })

    if (!accessToken) {
      return undefined
    }

    if (this.hasExpired(accessToken)) {
      return undefined
    }

    return accessToken
  },

  hasExpired(token: AccessToken) {
    return isAfter(new Date(), new Date(token.expires_in))
  },

  hasScopes(options: HasScopesOptions) {
    const scopes = options.token.Scopes.map(scope => scope.name)

    return options.scopes.every(scope => scopes.includes(scope))
  }
}
