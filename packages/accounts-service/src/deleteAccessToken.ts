import * as db from '@xarples/accounts-db'
import { grpc, AccessToken } from '@xarples/accounts-proto-loader'
import { toAccessTokenMessage } from './utils'

export default async function deleteAccessToken(
  call: grpc.ServerUnaryCall<AccessToken, AccessToken>,
  cb: grpc.sendUnaryData<AccessToken>
) {
  try {
    const request = call.request.toObject()
    const accessToken = await db.accessToken.delete({
      where: {
        id: request.id || undefined,
        token: request.token || undefined
      },
      include: {
        Client: {
          select: {
            id: true
          }
        },
        Scopes: {
          select: {
            name: true
          }
        }
      }
    })

    const message = toAccessTokenMessage(accessToken)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
