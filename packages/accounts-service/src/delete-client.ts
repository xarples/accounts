import * as db from '@xarples/accounts-db'
import { grpc, Client } from '@xarples/accounts-protobuf'
import { getClientMessage } from './utils'

export default async function deleteClient(
  call: grpc.ServerUnaryCall<Client, Client>,
  cb: grpc.sendUnaryData<Client>
) {
  try {
    const request = call.request.toObject()
    const client = await db.client.delete({
      where: {
        id: request.id || undefined
      }
    })

    const message = getClientMessage(client)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
