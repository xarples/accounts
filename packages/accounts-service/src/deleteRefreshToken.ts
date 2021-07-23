import * as db from '@xarples/accounts-db'
import { grpc, RefreshToken } from '@xarples/accounts-proto-loader'
import { toRefreshTokenMessage } from './utils'

export default async function deleteRefreshToken(
  call: grpc.ServerUnaryCall<RefreshToken, RefreshToken>,
  cb: grpc.sendUnaryData<RefreshToken>
) {
  const request = call.request.toObject()
  const RefreshToken = await db.refreshToken.delete({
    where: {
      id: request.id || undefined,
      token: request.token || undefined
    },
    include: {
      Client: {
        select: {
          client_id: true
        }
      },
      Scopes: {
        select: {
          name: true
        }
      }
    }
  })

  const message = toRefreshTokenMessage(RefreshToken)

  cb(null, message)
}
