import * as db from '@xarples/accounts-db'
import { randomBytes } from '@xarples/accounts-utils/dist'
import { grpc, Client } from '@xarples/accounts-proto-loader'
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
        secret: randomBytes(32).toString('hex')
      }
    })

    const message = getClientMessage(client)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
