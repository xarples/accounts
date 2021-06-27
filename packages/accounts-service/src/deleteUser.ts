import db from '@xarples/accounts-db'
import { grpc, User } from '@xarples/accounts-proto-loader'
import { toUserMessage } from './utils'

export default async function deleteUser(
  call: grpc.ServerUnaryCall<User, User>,
  cb: grpc.sendUnaryData<User>
) {
  const request = call.request.toObject()
  const user = await db.user.delete({
    where: {
      id: request.id || undefined
    }
  })

  const message = toUserMessage(user)

  cb(null, message)
}
