import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import { authorizationRequestSchema } from '../schemas'
import { AuthorizationRequest, AuthorizationConsentRequest } from '../types'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.get<AuthorizationRequest>(
    '/authorize',
    {
      preHandler: fastify.authPreHandler,
      schema: authorizationRequestSchema,
      attachValidation: true
    },
    authorizationHandler
  )

  fastify.post<AuthorizationConsentRequest>(
    '/authorize/:consent',
    authorizationConsentHandler
  )
}

async function authorizationHandler(
  request: FastifyRequest<AuthorizationRequest>,
  reply: FastifyReply
) {
  const fastify = this as FastifyInstance

  try {
    if (request.validationError) {
      reply.code(400).send({
        error: 'invalid_request',
        error_description: request.validationError.message
      })

      return
    }

    const client = await fastify.clientService.get({
      id: request.query.client_id
    })

    if (!client) {
      reply.code(400).send({
        error: 'invalid_request',
        error_description: 'Invalid client'
      })

      return
    }

    if (!client?.redirect_uris.includes(request.query.redirect_uri)) {
      reply.code(400).send({
        error: 'invalid_request',
        error_description: 'Invalid redirect URI'
      })

      return
    }

    if (request.query.scope) {
      const isScopeValid = fastify.scopeService.verify(
        request.query.scope.split(' ')
      )

      if (!isScopeValid) {
        reply.code(400).send({
          error: 'invalid_scope',
          error_description:
            'The requested scope is invalid, unknown, or malformed'
        })

        return
      }
    }

    if (request.query.response_mode === 'web_message') {
      const authorizationCode = await fastify.authorizationCodeService.create({
        userId: request.session?.user?.id,
        clientId: request.query.client_id,
        codeChallenge: request.query.code_challenge,
        codeChallengeMethod: request.query.code_challenge_method,
        redirectUri: request.query.redirect_uri,
        scopeList: request.query.scope?.split(' ')
      })

      const html = renderWebMessageResponse({
        code: authorizationCode.code,
        state: request.query.state,
        redirectUri: request.query.redirect_uri
      })

      reply
        .code(200)
        .type('html')
        .send(html)

      return
    }

    fastify.nuxt.render(request.raw, reply.raw)
  } catch (error) {
    reply.code(500).send({
      error: 'server_error',
      error_description: error.message
    })
  }
}

async function authorizationConsentHandler(
  request: FastifyRequest<AuthorizationConsentRequest>,
  reply: FastifyReply
) {
  const fastify = this as FastifyInstance

  if (request.params.consent === 'deny') {
    const params = new URLSearchParams({
      error: 'access_denied',
      error_description:
        'The resource owner or authorization server denied the request.'
    })

    if (request.body.state) {
      params.set('state', request.body.state)
    }

    reply.redirect(302, `${request.body.redirect_uri}?${params.toString()}`)

    return
  }

  const client = await fastify.clientService.get({
    id: request.body.client_id
  })

  if (!client) {
    const params = new URLSearchParams({
      error: 'invalid_request',
      error_description: 'Invalid client'
    })

    if (request.body.state) {
      params.set('state', request.body.state)
    }

    reply.redirect(302, `${request.body.redirect_uri}?${params.toString()}`)

    return
  }

  if (!client.redirect_uris.includes(request.body.redirect_uri)) {
    const params = new URLSearchParams({
      error: 'invalid_request',
      error_description: 'Invalid redirect URI'
    })

    if (request.body.state) {
      params.set('state', request.body.state)
    }

    reply.redirect(302, `${request.body.redirect_uri}?${params.toString()}`)

    return
  }

  if (request.body.scope) {
    const scopes = (await fastify.scopeService.list()).map(scope => scope.name)

    const isScopeValid = request.body.scope
      .split(' ')
      .every(scope => scopes.includes(scope))

    if (!isScopeValid) {
      const params = new URLSearchParams({
        error: 'invalid_scope',
        error_description:
          'The requested scope is invalid, unknown, or malformed'
      })

      if (request.body.state) {
        params.set('state', request.body.state)
      }

      reply.redirect(302, `${request.body.redirect_uri}?${params.toString()}`)

      return
    }
  }

  const authorizationCode = await fastify.authorizationCodeService.create({
    userId: request.session?.user?.id,
    clientId: request.body.client_id,
    codeChallenge: request.body.code_challenge,
    codeChallengeMethod: request.body.code_challenge_method,
    redirectUri: request.body.redirect_uri,
    scopeList: request.body.scope?.split(' ')
  })

  const params = new URLSearchParams({
    code: authorizationCode.code
  })

  if (request.body.state) {
    params.set('state', request.body.state)
  }

  reply.redirect(302, `${request.body.redirect_uri}?${params.toString()}`)
}

function renderWebMessageResponse(options: any) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
          <title>Authorization Response</title>
      </head>
      <body>
        <script type="text/javascript">
          const redirectURI = "${options.redirectUri}";
          const webMessageRequest = {};
          const authorizationResponse = {
            type: "authorization_response",
            response: {
              code: "${options.code}",
              ${options.state ? `state: "${options.state}"` : ''}
            }
          };
          const mainWin = (window.opener != window) ? window.opener : window.parent;

          mainWin.postMessage(authorizationResponse, redirectURI);
        </script>
      </body>
  `.trim()
}

export const authorize = fp(plugin, '3.x')
