import {
  FastifyPluginAsync,
  onRequestHookHandler,
  preHandlerHookHandler,
  preValidationHookHandler
} from 'fastify'
import fp from 'fastify-plugin'
import fastifyBasicAuth from 'fastify-basic-auth'
import BasicAuthService from './service'

declare module 'fastify' {
  interface FastifyInstance {
    basicAuthService: BasicAuthService
    basicAuth:
      | onRequestHookHandler
      | preValidationHookHandler
      | preHandlerHookHandler
  }
}

const service = new BasicAuthService()

const plugin: FastifyPluginAsync = async fastify => {
  fastify.decorate('basicAuthService', service)

  fastify.register(fastifyBasicAuth, {
    // authenticate: {
    //   realm: 'example',
    // },
    async validate(username, password, req, reply, done) {
      await fastify.basicAuthService.authenticate({
        username,
        password
      })
    }
  })
}

export default fp(plugin, '3.x')
