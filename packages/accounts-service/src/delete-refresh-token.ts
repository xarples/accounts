import * as db from '@xarples/accounts-db'
import { grpc, RefreshToken } from '@xarples/accounts-proto-loader'
import { getRefreshTokenMessage } from './utils'

export default async function deleteRefreshToken(
  call: grpc.ServerUnaryCall<RefreshToken, RefreshToken>,
  cb: grpc.sendUnaryData<RefreshToken>
) {
  try {
    const request = call.request.toObject()
    const RefreshToken = await db.refreshToken.delete({
      where: {
        id: request.id || undefined,
        token: request.token || undefined
      },
      include: {
        Scopes: {
          select: {
            name: true
          }
        }
      }
    })

    const message = getRefreshTokenMessage(RefreshToken)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
