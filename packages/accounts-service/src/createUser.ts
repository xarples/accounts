import db from '@xarples/accounts-db'
import { grpc, User } from '@xarples/accounts-proto-loader'
import { toUserMessage } from '@xarples/accounts-utils'

export default async function createUser(
  call: grpc.ServerUnaryCall<User, User>,
  cb: grpc.sendUnaryData<User>
) {
  const request = call.request.toObject()
  const user = await db.user.create({
    data: {
      email: request.email,
      username: request.username,
      password: request.password
    }
  })

  const message = toUserMessage(user)

  cb(null, message)
}
