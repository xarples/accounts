import db from '@xarples/accounts-db'
import { grpc, RefreshToken } from '@xarples/accounts-proto-loader'
import { toRefreshTokenMessage } from './utils'

export default async function getRefreshToken(
  call: grpc.ServerUnaryCall<RefreshToken, RefreshToken>,
  cb: grpc.sendUnaryData<RefreshToken>
) {
  try {
    const request = call.request.toObject()

    const refreshToken = await db.refreshToken.findUnique({
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

    if (!refreshToken) {
      return cb({
        code: grpc.status.NOT_FOUND
      })
    }

    const message = toRefreshTokenMessage(refreshToken)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
