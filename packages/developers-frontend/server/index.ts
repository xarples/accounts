import fastify from 'fastify'
import fastifyFormbody from 'fastify-formbody'
import fastifyCookie from 'fastify-cookie'
import {
  fastifySession,
  fastifyNuxt
  // fastifyOauth
} from '@xarples/accounts-fastify-plugins'

import api from './api'
import routes from './routes'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 5001
const server = fastify({
  logger: true
})

server.register(fastifyFormbody)
server.register(fastifyCookie)
server.register(fastifySession, {
  secret: 'a secret with minimum length of 32 characters',
  cookie: { secure: false },
  cookieName: 'developersSessionId',
  saveUninitialized: false
})
// server.register(fastifyOauth)

server.register(api)
server.register(routes)
server.register(fastifyNuxt)

async function main() {
  try {
    await server.listen(port, host)
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}

export default server
