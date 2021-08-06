import * as db from '@xarples/accounts-db'
import {
  grpc,
  RefreshToken,
  RefreshTokenList
} from '@xarples/accounts-proto-loader'
import { toRefreshTokenMessage } from './utils'

export default async function listRefreshTokens(
  call: grpc.ServerUnaryCall<RefreshToken, RefreshTokenList>,
  cb: grpc.sendUnaryData<RefreshTokenList>
) {
  try {
    const request = call.request.toObject()
    const refreshTokens = await db.refreshToken.findMany({
      where: {
        client_id: request.clientId || undefined
      },
      include: {
        Scopes: {
          select: {
            name: true
          }
        }
      }
    })

    const message = new RefreshTokenList()

    message.setRefreshTokenList(refreshTokens.map(toRefreshTokenMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
