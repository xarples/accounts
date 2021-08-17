import * as db from '@xarples/accounts-db'
import { grpc, Client } from '@xarples/accounts-protobuf'
import { getClientMessage } from './utils'

export default async function updateClient(
  call: grpc.ServerUnaryCall<Client, Client>,
  cb: grpc.sendUnaryData<Client>
) {
  try {
    const request = call.request.toObject()
    const client = await db.client.update({
      where: {
        id: request.id || undefined
      },
      data: {
        name: request.name || undefined,
        description: request.description || undefined,
        redirect_uris: request.redirectUriList || undefined
        // logo_uri: request.logoUri || undefined,
        // policy_uri: request.policyUri || undefined,
        // website_uri: request.websiteUri || undefined
      }
    })

    const message = getClientMessage(client)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
