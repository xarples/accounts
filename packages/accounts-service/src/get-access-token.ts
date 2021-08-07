import * as db from '@xarples/accounts-db'
import { grpc, AccessToken } from '@xarples/accounts-proto-loader'
import { getAccessTokenMessage } from './utils'

export default async function getAccessToken(
  call: grpc.ServerUnaryCall<AccessToken, AccessToken>,
  cb: grpc.sendUnaryData<AccessToken>
) {
  try {
    const request = call.request.toObject()

    const accessToken = await db.accessToken.findUnique({
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

    if (!accessToken) {
      return cb({
        code: grpc.status.NOT_FOUND
      })
    }

    const message = getAccessTokenMessage(accessToken)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
