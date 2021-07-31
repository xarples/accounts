import { FastifyInstance, FastifyPluginAsync, FastifyReply } from 'fastify'
import fp from 'fastify-plugin'
import { codeChallenge } from '@xarples/accounts-utils'
import { TokenRequest } from '../types'
import { FastifyRequest } from 'fastify'

const plugin: FastifyPluginAsync = async fastify => {
  const _authorizationCodeHandler = authorizationCodeGrantHandler.bind(fastify)
  const _clientCredentialsHandler = clientCredentialsGrantHandler.bind(fastify)
  const _refreshTokenHandler = refreshTokenGrantHandler.bind(fastify)

  fastify.post<TokenRequest>(
    '/token',
    {
      attachValidation: true,
      preHandler: fastify.clientAuthPreHandler
    },
    async (request, reply) => {
      try {
        if (
          ![
            'authorization_code',
            'client_credentials',
            'refresh_token'
          ].includes(request.body.grant_type)
        ) {
          reply.code(400).send({
            error: 'unsupported_grant_type',
            error_description:
              'The authorization grant type is not supported by the authorization server.'
          })
        }

        await _authorizationCodeHandler(request, reply)
        await _clientCredentialsHandler(request, reply)
        await _refreshTokenHandler(request, reply)
      } catch (error) {
        reply.code(500).send({
          error: 'server_error',
          error_description: error.message
        })
      }
    }
  )
}

async function clientCredentialsGrantHandler(
  request: FastifyRequest<TokenRequest>,
  reply: FastifyReply
) {
  if (request.body.grant_type === 'client_credentials') {
    const fastify = this as FastifyInstance

    if (request.body.scope) {
      const isScopeValid = fastify.scopeService.verify(
        request.body.scope.split(' ')
      )

      if (!isScopeValid) {
        reply.code(400).send({
          error: 'invalid_scope',
          error_description:
            'The requested scope is invalid, unknown, or malformed'
        })

        return
      }
    }

    const accessToken = await fastify.accessTokenService.create({
      clientId: request.client!.clientId,
      scopeList: request.body.scope?.split(' ')
    })

    reply.code(200).send({
      access_token: accessToken.token,
      token_type: 'Bearer',
      expires_in: 3600
    })

    return
  }
}

async function refreshTokenGrantHandler(
  request: FastifyRequest<TokenRequest>,
  reply: FastifyReply
) {
  if (request.body.grant_type === 'refresh_token') {
    const fastify = this as FastifyInstance

    if (!request.body.refresh_token) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Refresh token is invalid'
      })

      return
    }

    const refreshToken = await fastify.refreshTokenService.get({
      token: request.body.refresh_token
    })

    if (!refreshToken) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Refresh token is invalid or revoked'
      })

      return
    }

    if (refreshToken!.client_id !== request.client!.clientId) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Invalid client'
      })

      return
    }

    if (fastify.refreshTokenService.isExpired(refreshToken)) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Refresh token is expired'
      })

      return
    }

    const authorizationCode = await fastify.authorizationCodeService.get({
      id: refreshToken!.authorization_code_id
    })

    const accessToken = await fastify.accessTokenService.create({
      authorizationCodeId: refreshToken!.authorization_code_id,
      userId: authorizationCode!.user_id,
      clientId: request.client!.clientId,
      scopeList: authorizationCode!.scopes
    })

    const nextRefreshToken = await fastify.refreshTokenService.create({
      authorizationCodeId: refreshToken!.authorization_code_id,
      userId: authorizationCode!.user_id,
      clientId: request.client!.clientId,
      scopeList: authorizationCode!.scopes
    })

    await fastify.refreshTokenService.delete({
      id: refreshToken.id
    })

    reply.code(200).send({
      access_token: accessToken.token,
      token_type: 'Bearer',
      expires_in: 3600,
      refresh_token: nextRefreshToken.token
    })

    return
  }
}

async function authorizationCodeGrantHandler(
  request: FastifyRequest<TokenRequest>,
  reply: FastifyReply
) {
  const fastify = this as FastifyInstance

  if (request.body.grant_type === 'authorization_code') {
    fastify.log.info('Validating token request')
    fastify.log.debug(request.body)

    if (
      !request.body.code ||
      !request.body.redirect_uri ||
      !request.body.client_id ||
      !request.body.code_verifier
    ) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description:
          'code, redirect_uri, client_id and code_verifier are required parameters'
      })

      return
    }

    fastify.log.info('Fetching authorization code')

    const authorizationCode = await fastify.authorizationCodeService.get({
      code: request.body.code
    })

    fastify.log.debug(authorizationCode)
    fastify.log.info(`Validating if the authorization code exist`)

    if (!authorizationCode) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Authorization code is invalid or revoked'
      })

      return
    }

    fastify.log.info('Validating if the authorization code is expired')

    if (fastify.authorizationCodeService.isExpired(authorizationCode)) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Authorization code is expired'
      })

      return
    }

    fastify.log.info(
      `Validating if the authorization code belongs to the authenticated client`
    )

    if (authorizationCode!.client_id !== request.client!.clientId) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Invalid client'
      })

      return
    }

    fastify.log.info('Calculating code challenge from code verifier')

    const _codeChallenge = codeChallenge(request.body.code_verifier, {
      codeChallengeMethod: authorizationCode!.code_challenge_method as
        | 'plain'
        | 'S256'
    })

    fastify.log.debug(_codeChallenge)
    fastify.log.info(
      `Validating if code challenge is equal to the authorization code's one`
    )

    if (_codeChallenge !== authorizationCode!.code_challenge) {
      reply.code(400).send({
        error: 'invalid_request',
        error_description: 'Invalid code challenge'
      })

      return
    }

    fastify.log.info(
      `Validating if redirect uri is equal to the authorization code's one`
    )

    if (request.body.redirect_uri !== authorizationCode!.redirect_uri) {
      reply.code(400).send({
        error: 'invalid_grant',
        error_description: 'Invalid redirect_uri'
      })

      return
    }

    fastify.log.info('Issuing access token')

    const accessToken = await fastify.accessTokenService.create({
      authorizationCodeId: authorizationCode!.id,
      userId: authorizationCode!.user_id,
      clientId: request.client!.clientId,
      scopeList: authorizationCode.scopes
    })

    fastify.log.debug(accessToken)
    fastify.log.info('Issuing refresh token')

    const refreshToken = await fastify.refreshTokenService.create({
      authorizationCodeId: authorizationCode!.id,
      userId: authorizationCode!.user_id,
      clientId: request.client!.clientId,
      scopeList: authorizationCode.scopes
    })

    const tokenResponse = {
      access_token: accessToken.token,
      token_type: 'Bearer',
      expires_in: 3600,
      refresh_token: refreshToken.token
    }

    fastify.log.debug(refreshToken)
    fastify.log.info('Sending token response')
    fastify.log.debug(tokenResponse)

    reply.code(200).send(tokenResponse)
  }
}

export default fp(plugin, '3.x')
