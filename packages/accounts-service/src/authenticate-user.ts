import * as db from '@xarples/accounts-db'
import { grpc, User } from '@xarples/accounts-protobuf'
import { encrypt } from '@xarples/accounts-utils'
import { getUserMessage } from './utils'

export default async function signIn(
  call: grpc.ServerUnaryCall<User, User>,
  cb: grpc.sendUnaryData<User>
) {
  try {
    const request = call.request.toObject()
    const found = await db.user.findUnique({
      where: {
        id: request.id || undefined,
        email: request.email || undefined
      }
    })

    if (!found) {
      cb({
        code: grpc.status.NOT_FOUND
      })

      return
    }

    const encryptedPassword = encrypt(request.password)

    if (encryptedPassword !== found.password) {
      cb({
        code: grpc.status.INVALID_ARGUMENT
      })

      return
    }

    const message = getUserMessage(found)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
