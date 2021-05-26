import fastify from 'fastify'

const port = process.env.PORT || 5000
const server = fastify({ logger: true })

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
