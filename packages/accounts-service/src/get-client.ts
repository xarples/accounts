import * as db from '@xarples/accounts-db'
import { grpc, Client } from '@xarples/accounts-protobuf'
import { getClientMessage, getPublicClientMessage } from './utils'

export default async function getClient(
  call: grpc.ServerUnaryCall<Client, Client>,
  cb: grpc.sendUnaryData<Client>
) {
  try {
    const request = call.request.toObject()
    const metadata = call.metadata.getMap()
    const token = (metadata?.authorization as string)?.split(' ')?.[1]

    const client = await db.client.findUnique({
      where: {
        id: request.id || undefined
      }
    })

    if (!client) {
      return cb({
        code: grpc.status.NOT_FOUND
      })
    }

    if (!token) {
      const message = getPublicClientMessage(client)

      cb(null, message)

      return
    }

    const accessToken = await db.accessToken.verify(token)

    if (!accessToken) {
      const message = getPublicClientMessage(client)

      cb(null, message)

      return
    }

    if (client?.user_id === accessToken!.user_id) {
      const message = getClientMessage(client)

      cb(null, message)

      return
    }

    const message = getPublicClientMessage(client)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
