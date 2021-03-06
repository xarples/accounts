import db from '@xarples/accounts-db'
import { grpc, User } from '@xarples/accounts-proto-loader'
import { toUserMessage } from './utils'

export default async function getUser(
  call: grpc.ServerUnaryCall<User, User>,
  cb: grpc.sendUnaryData<User>
) {
  const request = call.request.toObject()
  const user = await db.user.findFirst({
    where: {
      id: request.id || undefined,
      email: request.email || undefined
    }
  })

  if (!user) {
    cb({
      code: grpc.status.NOT_FOUND
    })

    return
  }

  const message = toUserMessage(user)

  cb(null, message)
}
