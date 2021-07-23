import * as db from '@xarples/accounts-db'
import { randomBytes } from '@xarples/accounts-utils/dist'
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
      client_secret: randomBytes(32).toString('hex')
    }
  })

  const message = toClientMessage(client)

  cb(null, message)
}
