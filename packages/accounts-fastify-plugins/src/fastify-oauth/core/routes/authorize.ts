import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { getAuthorizeSchema } from '../schemas'
import { GetAuthorizeRoute, PostAuthorizeRoute } from '../types'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.get<GetAuthorizeRoute>(
    '/authorize',
    {
      // preHandler: fastify.authPreHandler,
      schema: getAuthorizeSchema,
      attachValidation: true
    },
    async (request, reply) => {
      try {
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
            error: 'invalid_request',
            error_description: 'Invalid client'
          })

          return
        }

        if (!client?.redirect_uris.includes(request.query.redirect_uri)) {
          reply.code(400).send({
            error: 'invalid_request',
            error_description: 'Invalid redirect URI'
          })

          return
        }

        fastify.nuxt.render(request.raw, reply.raw)
      } catch (error) {
        reply.code(500).send({
          error: 'server_error',
          error_description: error.message
        })
      }
    }
  )

  fastify.post<PostAuthorizeRoute>(
    '/authorize/:consent',
    async (request, reply) => {
      if (request.params.consent === 'deny') {
        const params = new URLSearchParams({
          error: 'access_denied',
          error_description:
            'The resource owner or authorization server denied the request.'
        })

        if (request.body.state) {
          params.set('state', request.body.state)
        }

        reply.redirect(302, `${request.body.redirect_uri}?${params.toString()}`)

        return
      }

      const authorizationCode = await fastify.authorizationCodeService.create({
        userId: request.session?.user?.id,
        clientId: request.body.client_id,
        codeChallenge: request.body.code_challenge,
        codeChallengeMethod: request.body.code_challenge_method,
        redirectUri: request.body.redirect_uri
      })

      const params = new URLSearchParams({
        code: authorizationCode.code
      })

      if (request.body.state) {
        params.set('state', request.body.state)
      }

      reply.redirect(302, `${request.body.redirect_uri}?${params.toString()}`)
    }
  )
}

export default fp(plugin, '3.x')
