import * as db from '@xarples/accounts-db'
import { grpc, User } from '@xarples/accounts-protobuf'
import { encrypt } from '../../accounts-utils/dist'
import { getUserMessage } from './utils'

export default async function updateUser(
  call: grpc.ServerUnaryCall<User, User>,
  cb: grpc.sendUnaryData<User>
) {
  try {
    const request = call.request.toObject()
    const encryptedPassword = request.password
      ? encrypt(request.password)
      : undefined

    const user = await db.user.update({
      where: {
        id: request.id || undefined
      },
      data: {
        first_name: request.firstName || undefined,
        last_name: request.lastName || undefined,
        email: request.email || undefined,
        password: encryptedPassword
      }
    })

    const message = getUserMessage(user)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
