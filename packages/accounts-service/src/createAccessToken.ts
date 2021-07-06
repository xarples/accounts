import db, { CodeChallengeMethod } from '@xarples/accounts-db'
import { randomBytes } from '@xarples/accounts-utils'
import { grpc, AccessToken } from '@xarples/accounts-proto-loader'
import { toAccessTokenMessage } from './utils'

export default async function createAccessToken(
  call: grpc.ServerUnaryCall<AccessToken, AccessToken>,
  cb: grpc.sendUnaryData<AccessToken>
) {
  const request = call.request.toObject()

  const token = await db.accessToken.create({
    data: {
      client_id: request.clientId,
      token: randomBytes(32).toString('hex')
    }
  })

  const message = toAccessTokenMessage(token)

  cb(null, message)
}
