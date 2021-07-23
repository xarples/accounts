import * as db from '@xarples/accounts-db'
import { grpc, Client, ClientList } from '@xarples/accounts-proto-loader'
import { toClientMessage } from './utils'

export default async function listClients(
  call: grpc.ServerUnaryCall<Client, ClientList>,
  cb: grpc.sendUnaryData<ClientList>
) {
  const request = call.request.toObject()
  const clients = await db.client.findMany({
    where: {
      client_id: request.clientId || undefined
    }
  })
  const message = new ClientList()

  message.setClientList(clients.map(toClientMessage))

  cb(null, message)
}
