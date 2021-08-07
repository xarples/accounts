import * as db from '@xarples/accounts-db'
import { grpc, Client } from '@xarples/accounts-proto-loader'
import { encrypt } from '@xarples/accounts-utils'
import { getClientMessage } from './utils'

export default async function authenticateClient(
  call: grpc.ServerUnaryCall<Client, Client>,
  cb: grpc.sendUnaryData<Client>
) {
  try {
    const request = call.request.toObject()
    const found = await db.client.findUnique({
      where: {
        id: request.id || undefined
      }
    })

    if (!found) {
      cb({
        code: grpc.status.NOT_FOUND
      })

      return
    }

    if (request.secret !== found.secret) {
      cb({
        code: grpc.status.NOT_FOUND
      })

      return
    }

    const message = getClientMessage(found)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
