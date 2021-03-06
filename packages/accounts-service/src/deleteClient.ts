import db from '@xarples/accounts-db'
import { grpc, Client } from '@xarples/accounts-proto-loader'
import { toClientMessage } from './utils'

export default async function deleteClient(
  call: grpc.ServerUnaryCall<Client, Client>,
  cb: grpc.sendUnaryData<Client>
) {
  const request = call.request.toObject()
  const client = await db.client.delete({
    where: {
      id: request.id || undefined
    }
  })

  const message = toClientMessage(client)

  cb(null, message)
}
