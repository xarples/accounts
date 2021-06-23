import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { getAuthorizeSchema } from './schemas'

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.get(
    '/authorize',
    { schema: getAuthorizeSchema, attachValidation: true },
    (request, reply) => {
      if (request.validationError) {
        reply.code(400).send({
          error: 'invalid_request',
          error_description: request.validationError.message
        })

        return
      }

      fastify.nuxt.render(request.raw, reply.raw)
    }
  )

  fastify.post('/authorize', (request, reply) => {
    reply.send({})
  })

  fastify.get('/.well-known/oauth-authorization-server', async () => {
    return {
      issuer: 'https://accounts.xarples.com',
      authorization_endpoint: 'https://accounts.xarples.com/authorize',
      token_endpoint: 'https://accounts.xarples.com/token',
      token_endpoint_auth_methods_supported: ['client_secret_basic'],
      userinfo_endpoint: 'https://accounts.xarples.com/userinfo',
      registration_endpoint: 'https://accounts.xarples.com/register',
      scopes_supported: [
        'profile',
        'email',
        'address',
        'phone',
        'offline_access'
      ],
      response_types_supported: ['code'],
      service_documentation: 'http://accounts.xarples.com/docs',
      ui_locales_supported: ['en-US']
    }
  })
}

export default fp(plugin, '3.x')
