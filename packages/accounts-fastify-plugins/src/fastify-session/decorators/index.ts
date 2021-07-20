import { IncomingMessage, Server, ServerResponse } from 'http'
import { preHandlerHookHandler } from 'fastify'
import { RouteGenericInterface } from 'fastify/types/route'

export const authPreHandler: preHandlerHookHandler<
  Server,
  IncomingMessage,
  ServerResponse,
  RouteGenericInterface,
  unknown
> = (request, reply, done) => {
  if (!request.session.user) {
    reply.redirect(`/signin?redirect_to=${request.url}`)

    return
  }

  done()
}
