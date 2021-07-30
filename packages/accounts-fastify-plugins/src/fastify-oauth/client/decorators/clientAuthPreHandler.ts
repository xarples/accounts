import { IncomingMessage, Server, ServerResponse } from 'http'
import { preHandlerHookHandler } from 'fastify'
import { ClientService } from '../services'
import { RouteGenericInterface } from 'fastify/types/route'

type ClientAuthPreHandler = RouteGenericInterface & {
  Body: {
    grant_type?: 'authorization_code' | 'client_credentials' | 'refresh_token'
    client_id?: string
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
> = async (request, reply) => {
  let authenticationMethod:
    | 'client_secret_basic'
    | 'private_key_jwt'
    | undefined = undefined

  const hasAuthenticationMethod =
    request.headers.authorization || request.body.client_assertion_type

  const needClientAuthentication = [
    'client_credentials',
    'refresh_token'
  ].includes(request?.body?.grant_type!)

  if (request.headers.authorization) {
    authenticationMethod = 'client_secret_basic'
  } else if (
    request.body.client_assertion_type ===
    'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'
  ) {
    authenticationMethod = 'private_key_jwt'
  }

  if (needClientAuthentication && !hasAuthenticationMethod) {
    reply
      .code(401)
      .header('WWW-Authenticate', 'Basic')
      .send({
        error: 'invalid_client',
        error_description: 'Client authentication failed'
      })

    reply.sent = true
  }

  if (
    !needClientAuthentication &&
    !authenticationMethod &&
    !request.body.client_id
  ) {
    reply
      .code(401)
      .header('WWW-Authenticate', 'Basic')
      .send({
        error: 'invalid_client',
        error_description: 'Client authentication failed'
      })

    reply.sent = true
  }

  if (!needClientAuthentication && !authenticationMethod) {
    request.client = { clientId: request.body.client_id! }
  }

  if (authenticationMethod === 'client_secret_basic') {
    const client = await service.basicAuth(request)

    if (client) {
      request.client = { clientId: client?.client_id! }
    }
  }
  // } else if (authenticationMethod === 'private_key_jwt') {
  //   // TODO
  //   // service.privateKeyJWTAuth()
  // }
}
