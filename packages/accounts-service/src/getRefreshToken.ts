import db from '@xarples/accounts-db'
import { grpc, RefreshToken } from '@xarples/accounts-proto-loader'
import { toRefreshTokenMessage } from './utils'

export default async function getRefreshToken(
  call: grpc.ServerUnaryCall<RefreshToken, RefreshToken>,
  cb: grpc.sendUnaryData<RefreshToken>
) {
  const request = call.request.toObject()

  const RefreshToken = await db.refreshToken.findUnique({
    where: {
      id: request.id || undefined,
      token: request.token || undefined
    },
    include: {
      Client: {
        select: {
          client_id: true
        }
      }
    }
  })

  if (!RefreshToken) {
    return cb({
      code: grpc.status.NOT_FOUND
    })
  }

  const message = toRefreshTokenMessage(RefreshToken)

  cb(null, message)
}
