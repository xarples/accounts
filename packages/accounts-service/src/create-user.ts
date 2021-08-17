import * as db from '@xarples/accounts-db'
import { grpc, User } from '@xarples/accounts-protobuf'
import { encrypt } from '@xarples/accounts-utils'
import { getUserMessage } from './utils'

export default async function createUser(
  call: grpc.ServerUnaryCall<User, User>,
  cb: grpc.sendUnaryData<User>
) {
  try {
    const request = call.request.toObject()

    const user = await db.user.create({
      data: {
        first_name: request.firstName,
        last_name: request.lastName,
        email: request.email,
        password: encrypt(request.password)
      }
    })

    const message = getUserMessage(user)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
