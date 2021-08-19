import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyRequest,
  FastifyReply
} from 'fastify'
import fp from 'fastify-plugin'
import { getUnixTime } from 'date-fns'
import { introspectTokenSchema } from '../schemas'
import {
  IntrospectRequest,
  AccessTokenResponse,
  RefreshTokenResponse
} from '../types'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.post<IntrospectRequest>(
    '/introspect',
    {
      attachValidation: true,
      schema: introspectTokenSchema,
      preHandler: [fastify.clientAuthPreHandler]
    },
    introspectHandler
  )
}

async function introspectHandler(
  request: FastifyRequest<IntrospectRequest>,
  reply: FastifyReply
) {
  const fastify = this as FastifyInstance

  try {
    if (request.validationError) {
      reply.code(200).send({
        active: false
      })

      return
    }

    let accessOrRefreshToken: AccessTokenResponse | RefreshTokenResponse | null

    const tokenTypeHint = request.body.token_type_hint

    if (tokenTypeHint === 'access_token') {
      accessOrRefreshToken = await fastify.accessTokenService.get({
        token: request.body.token
      })
    } else if (tokenTypeHint === 'refresh_token') {
      accessOrRefreshToken = await fastify.refreshTokenService.get({
        token: request.body.token
      })
    } else {
      accessOrRefreshToken =
        (await fastify.accessTokenService.get({
          token: request.body.token
        })) ||
        (await fastify.refreshTokenService.get({
          token: request.body.token
        }))
    }

    if (!accessOrRefreshToken) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Invalid token'
      })

      return
    }

    // it is possible to validate whether an access or refresh token has expired or not
    // using the accessTokenService or the refreshTokenService.
    if (fastify.accessTokenService.isExpired(accessOrRefreshToken)) {
      reply.code(200).send({
        active: false
      })

      return
    }

    const user = await fastify.userService.get({
      id: accessOrRefreshToken.user_id
    })

    reply.code(200).send({
      active: true,
      scope: accessOrRefreshToken.scopes.join(' '),
      client_id: accessOrRefreshToken.client_id,
      username: user!.email,
      token_type: tokenTypeHint,
      exp: getUnixTime(new Date(accessOrRefreshToken.expires_in)),
      iat: getUnixTime(new Date(accessOrRefreshToken.created_at)),
      sub: accessOrRefreshToken.user_id,
      aud: ['https://protected.example.com'],
      iss: 'https://authorization-server.com',
      jti: accessOrRefreshToken.id
    })
  } catch (error) {
    reply.code(200).send({
      active: false
    })
  }
}

export const introspect = fp(plugin, '3.x')
