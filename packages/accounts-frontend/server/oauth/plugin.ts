import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { getAuthorizeSchema } from './schemas'
import OauthService from './service'
import { GetAuthorizeRoute, PostAuthorizeRoute, PostTokenRoute } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    oauthService: OauthService
  }
}

const service = new OauthService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('oauthService', service)

  fastify.get<GetAuthorizeRoute>(
    '/authorize',
    {
      // preHandler: fastify.authPreHandler,
      schema: getAuthorizeSchema,
      attachValidation: true
    },
    async (request, reply) => {
      if (request.validationError) {
        reply.code(400).send({
          error: 'invalid_request',
          error_description: request.validationError.message
        })

        return
      }

      const client = await fastify.clientService.get({
        clientId: request.query.client_id
      })

      if (!client) {
        reply.code(400).send({
          error: 'unauthorized_client',
          error_description: 'Invalid client'
        })

        return
      }

      if (!client.redirect_uris.includes(request.query.redirect_uri)) {
        reply.code(400).send({
          error: 'invalid_request',
          error_description: 'Invalid redirect_uri'
        })

        return
      }

      fastify.nuxt.render(request.raw, reply.raw)
    }
  )

  fastify.post<PostAuthorizeRoute>(
    '/authorize/:consent',
    async (request, reply) => {
      if (request.params.consent === 'deny') {
        const params = new URLSearchParams()

        params.set('error', 'access_denied')
        params.set(
          'error_description',
          'The resource owner or authorization server denied the request.'
        )

        return
      }

      const authorizationCode = await fastify.oauthService.createAuthorizationCode(
        {
          clientId: request.body.client_id,
          codeChallenge: request.body.code_challenge,
          codeChallengeMethod: request.body.code_challenge_method
        }
      )

      const params = new URLSearchParams()

      params.set('code', authorizationCode.code)

      if (request.body.state) {
        params.set('state', request.body.state)
      }

      reply.redirect(302, `${request.body.redirect_uri}?${params.toString()}`)
    }
  )

  fastify.post<PostTokenRoute>('/token', (request, reply) => {
    reply.send({})
  })

  fastify.get('/.well-known/oauth-authorization-server', async (_, reply) => {
    const metadata = await fastify.oauthService.getMetadata()

    reply.send(metadata)
  })
}

export default fp(plugin, '3.x')
