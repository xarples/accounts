import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import axios from 'axios'
import {
  codeChallenge,
  codeVerifier,
  encodeBasic,
  randomBytes
} from '@xarples/accounts-utils'

declare module 'fastify' {
  interface FastifyInstance {}
}

const clientId = 'ckraxj4gu00033u9kvjny5bv7'
const clientSecret =
  'ceac77ba4ceba7d0fc8011fa82383b3f64cc7a1580f000182b7aba77adc31607'
const redirectUri = 'http://localhost:5002/callback'
const oauthServerHost = `${process.env.ACCOUNTS_FRONTEND_HOST}:5000`
const scopes = ['clients:read', 'clients:write']
const codeChallengeMethod = 'S256'

const plugin: FastifyPluginAsync = async fastify => {
  fastify.get('/signin', async (request, reply) => {
    const state = randomBytes(16).toString('hex')
    const _codeVerifier = codeVerifier()
    const _codeChallenge = codeChallenge(_codeVerifier, {
      codeChallengeMethod
    })

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      redirect_uri: redirectUri,
      code_challenge: _codeChallenge,
      code_challenge_method: codeChallengeMethod,
      response_mode: 'web_message',
      scope: scopes.join(' '),
      state
    })

    const url = `http://localhost:5000/authorize?${params.toString()}`

    request.session.codeVerifier = _codeVerifier
    request.session.state = state

    reply.redirect(url)
  })

  // fastify.get('/logout', (request, reply) => {
  //   request.destroySession(err => {
  //     if (err) {
  //       reply.status(500)
  //       reply.code(500).send('Internal Server Error')
  //     } else {
  //       reply.redirect('/')
  //       // reply.redirect(
  //       //   `http://${process.env.ACCOUNTS_FRONTEND_HOST}:5000/api/userslogout`
  //       // )
  //     }
  //   })
  // })

  fastify.get('/callback', async (request, reply) => {
    try {
      // @ts-ignore
      const { code, state } = request.query
      const _codeVerifier = request.session.codeVerifier
      const authState = request.session.state

      if (state === null || state !== authState) {
        reply.send({
          error: "The state doesn't match"
        })

        return
      }

      const params = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: _codeVerifier
      })

      const result = await axios.post(
        `http://${oauthServerHost}/token`,
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${encodeBasic({
              username: clientId,
              password: clientSecret
            })}`
          }
        }
      )

      request.session.accessToken = result.data.access_token
      request.session.refreshToken = result.data.refresh_token
      request.session.expiresIn = result.data.expires_in
      request.session.tokenType = result.data.token_type

      reply.redirect('/applications')
    } catch (error) {
      reply.code(error.response.status).send(error.response.data)
    }
  })
}

export default fp(plugin, '3.x')
