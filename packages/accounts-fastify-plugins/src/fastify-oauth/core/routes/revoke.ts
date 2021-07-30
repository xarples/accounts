import { FastifyInstance, FastifyPluginAsync, FastifyReply } from 'fastify'
import fp from 'fastify-plugin'
import { decodeBasic } from '@xarples/accounts-utils'
import { postRevokeSchema } from '../schemas'
import { RevokeRequest } from '../types'
import { AccessTokenResponse } from '../../access-token/types'
import { RefreshTokenResponse } from '../../refresh-token/types'
import { FastifyRequest } from 'fastify'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.post<RevokeRequest>(
    '/revoke',
    {
      attachValidation: true,
      onRequest: fastify.clientAuthPreHandler,
      schema: postRevokeSchema
    },
    revokeHandler
  )
}

async function revokeHandler(
  request: FastifyRequest<RevokeRequest>,
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

    const credentials = decodeBasic(request.headers.authorization!)

    if (accessOrRefreshToken.client_id !== credentials?.clientId) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Invalid client'
      })

      return
    }

    await fastify.authorizationCodeService.delete({
      id: accessOrRefreshToken.authorization_code_id
    })

    reply.code(200).send()
  } catch (error) {
    reply.code(200).send()
  }
}
export default fp(plugin, '3.x')
