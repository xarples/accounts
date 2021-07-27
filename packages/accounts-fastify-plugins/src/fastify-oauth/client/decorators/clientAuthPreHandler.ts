import { IncomingMessage, Server, ServerResponse } from 'http'
import { preHandlerHookHandler } from 'fastify'
import { ClientService } from '../services'
import { RouteGenericInterface } from 'fastify/types/route'

type ClientAuthPreHandler = RouteGenericInterface & {
  Body: {
    client_assertion_type?: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'
    client_assertion?: string
  }
}

const service = new ClientService()

export const clientAuthPreHandler: preHandlerHookHandler<
  Server,
  IncomingMessage,
  ServerResponse,
  RouteGenericInterface & ClientAuthPreHandler,
  unknown
> = (request, reply, done) => {
  if (!request.body.client_assertion_type) {
    const credentials = service.basicAuth(request)

    if (!credentials) {
      reply
        .code(401)
        .header('WWW-Authenticate', 'Basic')
        .send({
          error: 'invalid_client',
          error_description: 'Client authentication failed'
        })

      return
    }
  }

  if (
    request.body.client_assertion_type ===
    'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'
  ) {
    // TODO...
    // Implement private_key_jwt authentication
    service.privateKeyJWTAuth()
  }

  done()
}
