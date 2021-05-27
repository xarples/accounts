import { promisify } from 'util'
import fastify from 'fastify'
import fastifyFormbody from 'fastify-formbody'
import fastifyCookie from 'fastify-cookie'
import fastifySession from 'fastify-session'
import client from '@xarples/accounts-client'
import { User } from '@xarples/accounts-protos'

const port = process.env.PORT || 5000
const server = fastify({ logger: true })

const createUser = promisify<User, User>(client.createUser.bind(client))
const getUser = promisify<User, User>(client.getUser.bind(client))

server.register(fastifyFormbody)
server.register(fastifyCookie)
server.register(fastifySession, {
  secret: 'a secret with minimum length of 32 characters',
  cookie: { secure: false },
})

server.post<{ Body: { email: string; username: string; password: string } }>(
  '/api/users',
  async (request, reply) => {
    const message = new User()
    const { email, username, password } = request.body

    message.setEmail(email)
    message.setUsername(username)
    message.setPassword(password)

    const user = await createUser(message)

    return user.toObject()
  }
)

server.post<{ Body: { email: string; password: string } }>(
  '/login',
  async (request, reply) => {
    try {
      const message = new User()
      const { email, password } = request.body

      message.setEmail(email)

      const user = await getUser(message)

      if (password !== user.getPassword()) {
        reply.redirect(401, '/login')
      }

      request.session.authenticated = true
      reply.redirect('/')
    } catch (error) {
      reply.redirect(401, '/login')
    }
  }
)

server.get('/logout', (request, reply) => {
  if (request.session.authenticated) {
    request.destroySession((err) => {
      if (err) {
        reply.status(500)
        reply.send('Internal Server Error')
      } else {
        reply.redirect('/')
      }
    })
  } else {
    reply.redirect('/')
  }
})

server.get('/authorize', (request, reply) => {})
server.post('/token', (request, reply) => {})

async function main() {
  try {
    await server.listen(port)
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

export default server
