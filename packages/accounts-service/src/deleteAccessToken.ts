import db from '@xarples/accounts-db'
import { grpc, AccessToken } from '@xarples/accounts-proto-loader'
import { toAccessTokenMessage } from './utils'

export default async function deleteAccessToken(
  call: grpc.ServerUnaryCall<AccessToken, AccessToken>,
  cb: grpc.sendUnaryData<AccessToken>
) {
  const request = call.request.toObject()
  const AccessToken = await db.accessToken.delete({
    where: {
      id: request.id || undefined,
      token: request.token || undefined
    }
  })

  const message = toAccessTokenMessage(AccessToken)

  cb(null, message)
}
