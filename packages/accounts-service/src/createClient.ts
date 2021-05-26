import db from '@xarples/accounts-db'
import { grpc, Client } from '@xarples/accounts-protos'
import { toClientMessage } from '@xarples/accounts-utils'

export default async function createClient(
  call: grpc.ServerUnaryCall<Client, Client>,
  cb: grpc.sendUnaryData<Client>
) {
  const request = call.request.toObject()
  const user = await db.client.create({
    data: {
      secret: 'random_string',
      name: request.name,
      description: request.description,
      redirect_uris: request.redirectUrisList,
      logo_uri: request.logoUri,
      policy_uri: request.policyUri,
      website_uri: request.websiteUri,
    },
  })

  const message = toClientMessage(user)

  cb(null, message)
}
