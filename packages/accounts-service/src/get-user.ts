import * as db from '@xarples/accounts-db'
import { grpc, User } from '@xarples/accounts-proto-loader'
import { getUserMessage } from './utils'

export default async function getUser(
  call: grpc.ServerUnaryCall<User, User>,
  cb: grpc.sendUnaryData<User>
) {
  try {
    const request = call.request.toObject()
    const user = await db.user.findUnique({
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

    const message = getUserMessage(user)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
