import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { SignInRequest } from '../types'

declare module 'fastify' {
  interface FastifyInstance {}
}

const plugin: FastifyPluginAsync = async fastify => {
  fastify.post<SignInRequest>('/signin', async (request, reply) => {
    const user = await fastify.userService.authenticateUser(request.body)

    request.session.user = {
      id: user.id,
      email: user.email
    }

    reply.code(200).send(user)
  })

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
}

export default fp(plugin, '3.x')
