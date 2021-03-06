import db from '@xarples/accounts-db'
import {
  grpc,
  AccessToken,
  AccessTokenList
} from '@xarples/accounts-proto-loader'
import { toAccessTokenMessage } from './utils'

export default async function listAccessTokens(
  call: grpc.ServerUnaryCall<AccessToken, AccessTokenList>,
  cb: grpc.sendUnaryData<AccessTokenList>
) {
  const request = call.request.toObject()
  const accessTokens = await db.accessToken.findMany({
    where: {
      client_id: request.clientId || undefined
    }
  })

  const message = new AccessTokenList()

  message.setAccessTokenList(accessTokens.map(toAccessTokenMessage))

  cb(null, message)
}
