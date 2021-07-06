import db from '@xarples/accounts-db'
import { randomBytes } from '@xarples/accounts-utils'
import { grpc, RefreshToken } from '@xarples/accounts-proto-loader'
import { toRefreshTokenMessage } from './utils'

export default async function createRefreshToken(
  call: grpc.ServerUnaryCall<RefreshToken, RefreshToken>,
  cb: grpc.sendUnaryData<RefreshToken>
) {
  const request = call.request.toObject()

  const token = await db.refreshToken.create({
    data: {
      client_id: request.clientId,
      token: randomBytes(32).toString('hex')
    }
  })

  const message = toRefreshTokenMessage(token)

  cb(null, message)
}
