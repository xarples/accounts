import {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyRequest,
  FastifyReply
} from 'fastify'
import fp from 'fastify-plugin'
import { codeChallenge } from '@xarples/accounts-utils'
import {
  ClientCredentialsGrantRequest,
  RefreshTokenRequest,
  TokenRequest
} from '../types'

const plugin: FastifyPluginAsync = async fastify => {
  const _authorizationCodeHandler = authorizationCodeGrantHandler.bind(fastify)
  const _clientCredentialsHandler = clientCredentialsGrantHandler.bind(fastify)
  const _refreshTokenHandler = refreshTokenGrantHandler.bind(fastify)

  fastify.post<
    TokenRequest | ClientCredentialsGrantRequest | RefreshTokenRequest
  >(
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

        await _authorizationCodeHandler(
          request as FastifyRequest<TokenRequest>,
          reply
        )
        await _clientCredentialsHandler(
          request as FastifyRequest<ClientCredentialsGrantRequest>,
          reply
        )
        await _refreshTokenHandler(
          request as FastifyRequest<RefreshTokenRequest>,
          reply
        )
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
  request: FastifyRequest<ClientCredentialsGrantRequest>,
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
      scopeList: request.body.scope?.split(' '),
      audienceList: request.body.resource
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
  request: FastifyRequest<RefreshTokenRequest>,
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
      audienceList: authorizationCode!.audience,
      scopeList: authorizationCode!.scopes
    })

    const nextRefreshToken = await fastify.refreshTokenService.create({
      authorizationCodeId: refreshToken!.authorization_code_id,
      userId: authorizationCode!.user_id,
      clientId: request.client!.clientId,
      audienceList: authorizationCode!.audience,
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

    const accessToken = await fastify.accessTokenService.create({
      authorizationCodeId: authorizationCode!.id,
      userId: authorizationCode!.user_id,
      clientId: request.client!.clientId,
      audienceList: authorizationCode!.audience,
      scopeList: authorizationCode.scopes
    })

    fastify.log.info('Issuing access token')
    fastify.log.debug(accessToken)

    const refreshToken = await fastify.refreshTokenService.create({
      authorizationCodeId: authorizationCode!.id,
      userId: authorizationCode!.user_id,
      clientId: request.client!.clientId,
      audienceList: authorizationCode!.audience,
      scopeList: authorizationCode.scopes
    })

    fastify.log.info('Issuing refresh token')
    fastify.log.debug(refreshToken)

    const tokenResponse = {
      access_token: accessToken.token,
      token_type: 'Bearer',
      expires_in: 3600,
      refresh_token: refreshToken.token,
      id_token: undefined as undefined | string
    }

    if (authorizationCode.scopes.includes('openid')) {
      const payload = {
        iss: 'https://server.example.com',
        sub: authorizationCode!.user_id,
        aud: request.client!.clientId,
        nonce: request.body?.nonce,
        auth_time: authorizationCode.created_at
      }

      tokenResponse.id_token = await fastify.idTokenService.sign(payload)

      fastify.log.info('Issuing id token')
      fastify.log.debug(tokenResponse.id_token)
    }

    fastify.log.info('Sending token response')
    fastify.log.debug(tokenResponse)

    reply
      .headers({
        'Cache-Control': 'no-store',
        Pragma: 'no-cache'
      })
      .code(200)
      .send(tokenResponse)
  }
}

export const token = fp(plugin, '3.x')
