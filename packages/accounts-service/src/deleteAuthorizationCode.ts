import db from '@xarples/accounts-db'
import { grpc, AuthorizationCode } from '@xarples/accounts-proto-loader'
import { toAuthorizationCodeMessage } from './utils'

export default async function deleteAuthorizationCode(
  call: grpc.ServerUnaryCall<AuthorizationCode, AuthorizationCode>,
  cb: grpc.sendUnaryData<AuthorizationCode>
) {
  const request = call.request.toObject()
  const AuthorizationCode = await db.authorizationCode.delete({
    where: {
      id: request.id || undefined,
      code: request.code || undefined
    },
    include: {
      Client: {
        select: {
          client_id: true
        }
      }
    }
  })

  const message = toAuthorizationCodeMessage(AuthorizationCode)

  cb(null, message)
}
