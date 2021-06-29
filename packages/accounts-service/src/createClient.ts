import db, { ClientType } from '@xarples/accounts-db'
import { grpc, Client } from '@xarples/accounts-proto-loader'
import { toClientMessage } from './utils'

export default async function createClient(
  call: grpc.ServerUnaryCall<Client, Client>,
  cb: grpc.sendUnaryData<Client>
) {
  const request = call.request.toObject()

  const user = await db.client.create({
    data: {
      name: request.name,
      description: request.description,
      type: ClientType[request.type as ClientType],
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
