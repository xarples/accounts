import db, { ClientType } from '@xarples/accounts-db'
import { randomBytes } from '@xarples/accounts-utils'
import { grpc, Client } from '@xarples/accounts-proto-loader'
import { toClientMessage } from './utils'
import isAfter from 'date-fns/isAfter'

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

  const accessToken = await db.accessToken.findUnique({
    where: { token: metadata.authorization as string }
  })

  if (!accessToken) {
    cb({
      code: grpc.status.UNAUTHENTICATED,
      message: 'Invalid access token'
    })

    return
  }

  if (isAfter(new Date(), new Date(accessToken.expires_in))) {
    cb({
      code: grpc.status.UNAUTHENTICATED,
      message: 'Access token is expired'
    })

    return
  }

  const user = await db.client.create({
    data: {
      name: request.name,
      description: request.description,
      type: ClientType[request.type as ClientType],
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
