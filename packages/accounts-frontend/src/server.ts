import fastify from 'fastify'
import fastifyFormbody from 'fastify-formbody'
import fastifyCookie from 'fastify-cookie'
import fastifySession from 'fastify-session'
import clients from './clients'
import metadata from './metadata'

const port = process.env.PORT || 5000
const server = fastify({ logger: true })

server.register(fastifyFormbody)
server.register(fastifyCookie)
server.register(fastifySession, {
  secret: 'a secret with minimum length of 32 characters',
  cookie: { secure: false }
})
server.register(clients)
server.register(metadata)

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
