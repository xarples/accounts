import fastify from 'fastify'
import fastifyFormbody from 'fastify-formbody'
import {
  fastifyAuth,
  fastifySession,
  fastifyUser,
  fastifyNuxt,
  fastifyOauth
} from '@xarples/accounts-fastify-plugins'

import config from './config'

const isDev = process.env.NODE_ENV !== 'production'
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 5000
const server = fastify({
  logger: {
    prettyPrint: isDev
  }
})

server.register(fastifyFormbody)
server.register(fastifySession, {
  secret: config.secret,
  cookie: { secure: false },
  cookieName: 'accountsSessionId',
  saveUninitialized: false
})
server.register(fastifyAuth)
server.register(fastifyUser)
server.register(fastifyOauth)
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
