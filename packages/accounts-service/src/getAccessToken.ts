import db from '@xarples/accounts-db'
import { grpc, AccessToken } from '@xarples/accounts-proto-loader'
import { toAccessTokenMessage } from './utils'

export default async function getAccessToken(
  call: grpc.ServerUnaryCall<AccessToken, AccessToken>,
  cb: grpc.sendUnaryData<AccessToken>
) {
  const request = call.request.toObject()

  const accessToken = await db.accessToken.findUnique({
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

  if (!accessToken) {
    return cb({
      code: grpc.status.NOT_FOUND
    })
  }

  const message = toAccessTokenMessage(accessToken)

  cb(null, message)
}
