import * as db from '@xarples/accounts-db'
import { grpc, AuthorizationCode } from '@xarples/accounts-proto-loader'
import { getAuthorizationCodeMessage } from './utils'

export default async function getAuthorizationCode(
  call: grpc.ServerUnaryCall<AuthorizationCode, AuthorizationCode>,
  cb: grpc.sendUnaryData<AuthorizationCode>
) {
  try {
    const request = call.request.toObject()

    const authorizationCode = await db.authorizationCode.findUnique({
      where: {
        id: request.id || undefined,
        code: request.code || undefined
      },
      include: {
        Scopes: {
          select: {
            name: true
          }
        }
      }
    })

    if (!authorizationCode) {
      return cb({
        code: grpc.status.NOT_FOUND
      })
    }

    const message = getAuthorizationCodeMessage(authorizationCode)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
