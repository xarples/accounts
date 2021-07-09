import fastify from 'fastify'
import fastifyFormbody from 'fastify-formbody'
import fastifyCookie from 'fastify-cookie'
import {
  fastifySession,
  fastifyUser,
  fastifyNuxt,
  fastifyOauth
} from '@xarples/accounts-fastify-plugins'

// const isDev = process.env.NODE_ENV !== 'production'
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 5000
const server = fastify({
  logger: true
})

server.register(fastifyFormbody)
server.register(fastifyCookie)
server.register(fastifySession)
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
