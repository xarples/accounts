import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { authPreHandler } from './hooks'
import UserService from './service'
import { PostSignInRoute, PostSignUpRoute } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    userService: UserService
    authPreHandler: typeof authPreHandler
  }
}

const service = new UserService()

const plugin: FastifyPluginAsync = async (fastify, options) => {
  fastify.decorate('userService', service)
  fastify.decorate('authPreHandler', authPreHandler)

  fastify.get(
    '/logout',
    { preHandler: fastify.authPreHandler },
    (request, reply) => {
      request.destroySession(err => {
        if (err) {
          reply.status(500)
          reply.send('Internal Server Error')
        } else {
          reply.redirect('/')
        }
      })
    }
  )

  fastify.post<PostSignInRoute>('/signin', async (request, reply) => {
    const user = await fastify.userService.signIn(request.body)

    request.session.user = {
      id: user.id,
      email: user.email
    }
  })

  fastify.post<PostSignUpRoute>('/signup', async (request, reply) => {
    const user = await fastify.userService.create(request.body)

    reply.send(user)
  })
}

export default fp(plugin, '3.x')
