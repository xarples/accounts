import { FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'

interface Options {
  context: (context: {
    request: FastifyRequest
    reply: FastifyReply
  }) => Promise<any>
  service: any
  serviceName: string
}

export const plugin: FastifyPluginAsync<Options> = async (fastify, options) => {
  fastify.decorate(options.serviceName, options.service)

  fastify.addHook('preHandler', async (request, reply, done) => {
    if (options.context) {
      const context = await options.context({ request, reply })
      options.service.setContext(context)
    }

    options.service.setContext({})

    done()
  })
}
