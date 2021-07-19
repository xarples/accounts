import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import axios from 'axios'

declare module 'fastify' {
  interface FastifyInstance {}
}

const oauthServerHost = `${process.env.ACCOUNTS_FRONTEND_HOST}:5000`

const plugin: FastifyPluginAsync = async fastify => {
  fastify.get('/api/clients', async (request, reply) => {
    try {
      const result = await axios.get(`http://${oauthServerHost}/api/clients`, {
        headers: {
          authorization: `${request.session.tokenType} ${request.session.accessToken}`
        }
      })

      reply.code(200).send(result.data)
    } catch (error) {
      reply.code(200).send(error)
    }
  })
}

export default fp(plugin, '3.x')
