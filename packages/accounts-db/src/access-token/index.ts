import { AccessToken, Scope } from '@prisma/client'
import { isAfter } from 'date-fns'
import { createClient } from '../prisma'

type AccessTokenWithScopes = AccessToken & {
  Scopes: Scope[]
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

    if (this.verifyExpirationDate(accessToken)) {
      return undefined
    }

    return accessToken
  },

  verifyExpirationDate(token: AccessToken) {
    return isAfter(new Date(), new Date(token.expires_in))
  },

  verifyScopes(token: AccessTokenWithScopes, scopes: string[]) {
    const tokenScopes = token.Scopes.map(scope => scope.name)

    return scopes.every(scope => tokenScopes.includes(scope))
  }
}
