import { jwtVerify } from 'jose/jwt/verify'
import { createRemoteJWKSet } from 'jose/jwks/remote'

export interface Options {
  audience?: string | string[]
}

const host = 'http://localhost:5000'
const url = new URL(`${host}/.well-known/jwks`)
const JWKS = createRemoteJWKSet(url)

export async function verify(jwt: string, options: Options) {
  return jwtVerify(jwt, JWKS, {
    typ: 'at+jwt',
    algorithms: ['RS256'],
    issuer: 'http://localhost:5000',
    audience: options.audience
  })
}
