import * as db from '@xarples/accounts-db'
import { grpc, AuthorizationCode } from '@xarples/accounts-proto-loader'
import { toAuthorizationCodeMessage } from './utils'

export default async function deleteAuthorizationCode(
  call: grpc.ServerUnaryCall<AuthorizationCode, AuthorizationCode>,
  cb: grpc.sendUnaryData<AuthorizationCode>
) {
  const request = call.request.toObject()
  const authorizationCode = await db.authorizationCode.delete({
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

  const message = toAuthorizationCodeMessage(authorizationCode)

  cb(null, message)
}
