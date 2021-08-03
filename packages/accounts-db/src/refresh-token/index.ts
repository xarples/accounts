import { RefreshToken, Scope } from '@prisma/client'
import { isAfter } from 'date-fns'
import { createClient } from '../prisma'

type RefreshTokenWithScopes = RefreshToken & {
  Scopes: Scope[]
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

    if (this.verifyExpirationDate(refreshToken)) {
      return undefined
    }

    return refreshToken
  },

  verifyExpirationDate(token: RefreshToken) {
    return isAfter(new Date(), new Date(token.expires_in))
  },

  verifyScopes(token: RefreshTokenWithScopes, scopes: string[]) {
    const tokenScopes = token.Scopes.map(scope => scope.name)

    return scopes.every(scope => tokenScopes.includes(scope))
  }
}
