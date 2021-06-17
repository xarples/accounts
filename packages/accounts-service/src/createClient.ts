import db from '@xarples/accounts-db'
import { grpc, Client } from '@xarples/accounts-proto-loader'
import { toClientMessage } from '@xarples/accounts-utils'

export default async function createClient(
  call: grpc.ServerUnaryCall<Client, Client>,
  cb: grpc.sendUnaryData<Client>
) {
  const request = call.request.toObject()
  const user = await db.client.create({
    data: {
      name: request.name,
      description: request.description || undefined
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
