import * as db from '@xarples/accounts-db'
import {
  grpc,
  AccessToken,
  AccessTokenList
} from '@xarples/accounts-proto-loader'
import { getAccessTokenMessage } from './utils'

export default async function listAccessTokens(
  call: grpc.ServerUnaryCall<AccessToken, AccessTokenList>,
  cb: grpc.sendUnaryData<AccessTokenList>
) {
  try {
    const request = call.request.toObject()
    const accessTokens = await db.accessToken.findMany({
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

    const message = new AccessTokenList()

    message.setAccessTokenList(accessTokens.map(getAccessTokenMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
