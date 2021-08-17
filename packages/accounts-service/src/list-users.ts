import * as db from '@xarples/accounts-db'
import { grpc, User, UserList } from '@xarples/accounts-protobuf'
import { getUserMessage } from './utils'

export default async function listUsers(
  _: grpc.ServerUnaryCall<User, UserList>,
  cb: grpc.sendUnaryData<UserList>
) {
  try {
    // const request = call.request.toObject()
    const users = await db.user.findMany()
    const message = new UserList()

    message.setUserList(users.map(getUserMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
