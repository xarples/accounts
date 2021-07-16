import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { PostSignInRoute, PostSignUpRoute } from '../types/types'

declare module 'fastify' {
  interface FastifyInstance {}
}

const plugin: FastifyPluginAsync = async fastify => {
  fastify.post<PostSignUpRoute>('/api/users', async (request, reply) => {
    const user = await fastify.userService.create(request.body)

    reply.send(user)
  })

  fastify.get('/api/users/me', async (request, reply) => {
    reply.send(request.session.user)
  })

  fastify.post<PostSignInRoute>('/api/users/signin', async (request, reply) => {
    const user = await fastify.userService.signIn(request.body)

    request.session.user = {
      id: user.id,
      email: user.email
    }

    reply.code(200).send(user)
  })

  fastify.get(
    '/api/users/logout',
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
}

export default fp(plugin, '3.x')
