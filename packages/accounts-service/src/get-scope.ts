import * as db from '@xarples/accounts-db'
import { grpc, Scope } from '@xarples/accounts-protobuf'
import { getScopeMessage } from './utils'

export default async function getScope(
  call: grpc.ServerUnaryCall<Scope, Scope>,
  cb: grpc.sendUnaryData<Scope>
) {
  try {
    const request = call.request.toObject()

    const refreshToken = await db.scope.findUnique({
      where: {
        id: request.id || undefined,
        name: request.name || undefined
      }
    })

    if (!refreshToken) {
      return cb({
        code: grpc.status.NOT_FOUND
      })
    }

    const message = getScopeMessage(refreshToken)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
