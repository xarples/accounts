import db from '@xarples/accounts-db'
import { grpc, Client } from '@xarples/accounts-proto-loader'
import { toClientMessage } from './utils'

export default async function updateClient(
  call: grpc.ServerUnaryCall<Client, Client>,
  cb: grpc.sendUnaryData<Client>
) {
  const request = call.request.toObject()
  const client = await db.client.update({
    where: {
      id: request.id || undefined
    },
    data: {
      secret: request.secret || undefined,
      redirect_uris: request.redirectUrisList || undefined,
      logo_uri: request.logoUri || undefined,
      policy_uri: request.policyUri || undefined,
      website_uri: request.websiteUri || undefined
    }
  })

  const message = toClientMessage(client)

  cb(null, message)
}
