import * as db from '@xarples/accounts-db'
import { randomBytes } from '@xarples/accounts-utils'
import { grpc, Client } from '@xarples/accounts-proto-loader'
import { toClientMessage } from './utils'

export default async function createClient(
  call: grpc.ServerUnaryCall<Client, Client>,
  cb: grpc.sendUnaryData<Client>
) {
  try {
    const request = call.request.toObject()
    const metadata = call.metadata.getMap()

    if (!metadata.authorization) {
      cb({
        code: grpc.status.INVALID_ARGUMENT,
        name: 'invalid_request',
        message: 'Invalid required parameter authorization'
      })

      return
    }

    const token = (metadata.authorization as string).split(' ')?.[1]

    const accessToken = await db.accessToken.verify(token)

    if (!accessToken) {
      cb({
        code: grpc.status.UNAUTHENTICATED,
        name: 'invalid_token',
        message:
          'The access token provided is expired, revoked, malformed, or invalid for other reasons.'
      })

      return
    }

    const hasScopes = db.accessToken.verifyScopes(accessToken, [
      'clients:write'
    ])

    if (!hasScopes) {
      cb({
        code: grpc.status.PERMISSION_DENIED,
        name: 'insufficient_scope',
        message:
          'The request requires higher privileges than provided by the access token.'
      })

      return
    }

    const client = await db.client.create({
      data: {
        user_id: accessToken!.user_id,
        secret: randomBytes(32).toString('hex'),
        name: request.name,
        description: request.description,
        application_type:
          db.ClientType[request.applicationType as db.ClientType],
        redirect_uris: request.redirectUriList
        // token_endpoint_auth_method: request.tokenEndpointAuthMethod,
        // scope: request.scope,
        // contacts: request.contactsList,
        // redirect_uris: request.redirectUrisList,
        // logo_uri: request.logoUri,
        // policy_uri: request.policyUri,
        // website_uri: request.websiteUri
      }
    })

    const message = toClientMessage(client)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
