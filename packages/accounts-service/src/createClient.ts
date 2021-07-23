import db, { ClientType } from '@xarples/accounts-db'
import { randomBytes } from '@xarples/accounts-utils'
import { grpc, Client } from '@xarples/accounts-proto-loader'
import { toClientMessage } from './utils'

export default async function createClient(
  call: grpc.ServerUnaryCall<Client, Client>,
  cb: grpc.sendUnaryData<Client>
) {
  const request = call.request.toObject()
  const metadata = call.metadata.getMap()

  if (!metadata.authorization) {
    cb({
      code: grpc.status.UNAUTHENTICATED,
      message: 'Access token is required'
    })

    return
  }

  const token = (metadata.authorization as string).split(' ')?.[1]

  const accessToken = await db.accessToken.verify(token)

  if (!accessToken) {
    cb({
      code: grpc.status.UNAUTHENTICATED,
      message: 'Invalid access token'
    })

    return
  }

  const hasScopes = db.accessToken.hasScopes({
    token: accessToken,
    scopes: ['clients:write']
  })

  if (!hasScopes) {
    cb({
      code: grpc.status.PERMISSION_DENIED,
      message: 'Insufficient scopes'
    })

    return
  }

  const user = await db.client.create({
    data: {
      user_id: accessToken!.user_id,
      client_name: request.clientName,
      client_description: request.clientDescription,
      application_type: ClientType[request.applicationType as ClientType],
      client_id: randomBytes(32).toString('hex'),
      client_secret: randomBytes(32).toString('hex'),
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

  const message = toClientMessage(user)

  cb(null, message)
}
