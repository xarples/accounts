import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import fp from 'fastify-plugin'
// import { getUnixTime, add } from 'date-fns'
// import { SignJWT } from 'jose/jwt/sign'
// import { parseJwk } from 'jose/jwk/parse'
import { jwtVerify } from 'jose/jwt/verify'
import { createRemoteJWKSet } from 'jose/jwks/remote'

interface Context {
  request: FastifyRequest
  reply: FastifyReply
}

interface Options {
  iss: string
  sub: string
  aud: string
  nonce?: string
  auth_time: string
}

export class IdTokenService {
  context: Context | undefined

  setContext(context: Context) {
    this.context = context
  }

  async sign(options: Options): Promise<string | undefined> {
    try {
      // const signKey = await parseJwk(privateJWK)

      // const token = new SignJWT({
      //   iss: options.iss,
      //   sub: options.sub,
      //   aud: options.aud,
      //   nonce: options.nonce,
      //   exp: getUnixTime(add(new Date(), { hours: 1 })),
      //   iat: getUnixTime(new Date()),
      //   auth_time: getUnixTime(new Date(options.auth_time))
      // })
      //   .setProtectedHeader({ alg: 'RS256' })
      //   .sign(signKey)

      return ''
    } catch (error) {
      return Promise.reject(error)
    }
  }

  async verify(token: string) {
    const JWKS = createRemoteJWKSet(
      new URL('http://localhost:5000/.well-known/jwks')
    )

    return jwtVerify(token, JWKS)
  }
}

const plugin: FastifyPluginAsync = async fastify => {
  const service = new IdTokenService()

  fastify.addHook('preHandler', (request, reply, done) => {
    service.setContext({ request, reply })
    done()
  })

  fastify.decorate('idTokenService', service)
}

export const idTokenService = fp(plugin, '3.x')
