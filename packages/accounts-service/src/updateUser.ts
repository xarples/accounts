import db from '@xarples/accounts-db'
import { grpc, User } from '@xarples/accounts-protos'
import { toUserMessage } from '@xarples/accounts-utils'

export default async function updateUser(
  call: grpc.ServerUnaryCall<User, User>,
  cb: grpc.sendUnaryData<User>
) {
  const request = call.request.toObject()
  const user = await db.user.update({
    where: {
      id: request.id || undefined,
    },
    data: {
      email: request.email || undefined,
      username: request.username || undefined,
      password: request.password || undefined,
    },
  })

  const message = toUserMessage(user)

  cb(null, message)
}
