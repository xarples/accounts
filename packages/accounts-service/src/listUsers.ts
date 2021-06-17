import db from '@xarples/accounts-db'
import { grpc, User, UserList } from '@xarples/accounts-proto-loader'
import { toUserMessage } from '@xarples/accounts-utils'

export default async function listUsers(
  _: grpc.ServerUnaryCall<User, UserList>,
  cb: grpc.sendUnaryData<UserList>
) {
  // const request = call.request.toObject()
  const users = await db.user.findMany()
  const message = new UserList()

  message.setUserList(users.map(toUserMessage))

  cb(null, message)
}
