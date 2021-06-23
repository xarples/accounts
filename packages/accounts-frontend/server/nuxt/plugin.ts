import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
// @ts-ignore
import { loadNuxt, build } from 'nuxt'

declare module 'fastify' {
  interface FastifyInstance {
    nuxt: any
  }
}

const isDev = process.env.NODE_ENV !== 'production'

const plugin: FastifyPluginAsync = async fastify => {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  if (isDev) {
    build(nuxt)
  }

  fastify.get('*', (request, reply) => {
    nuxt.render(request.raw, reply.raw)
  })

  fastify.decorate('nuxt', nuxt)
}

export default fp(plugin, '3.x')
