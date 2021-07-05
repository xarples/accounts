import db from '@xarples/accounts-db'
import { grpc, Client } from '@xarples/accounts-proto-loader'
import { toClientMessage } from './utils'

export default async function getClient(
  call: grpc.ServerUnaryCall<Client, Client>,
  cb: grpc.sendUnaryData<Client>
) {
  const request = call.request.toObject()

  const client = await db.client.findUnique({
    where: {
      id: request.id || undefined,
      client_id: request.clientId || undefined
    }
  })

  if (!client) {
    return cb({
      code: grpc.status.NOT_FOUND
    })
  }

  const message = toClientMessage(client)

  cb(null, message)
}
