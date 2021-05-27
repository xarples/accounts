import db from '@xarples/accounts-db'
import { grpc, User, ClientList } from '@xarples/accounts-protos'
import { toClientMessage } from '@xarples/accounts-utils'

export default async function listUsers(
  _: grpc.ServerUnaryCall<User, ClientList>,
  cb: grpc.sendUnaryData<ClientList>
) {
  // const request = call.request.toObject()
  const users = await db.client.findMany()
  const message = new ClientList()

  message.setClientList(users.map(toClientMessage))

  cb(null, message)
}
