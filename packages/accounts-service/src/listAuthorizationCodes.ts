import * as db from '@xarples/accounts-db'
import {
  grpc,
  AuthorizationCode,
  AuthorizationCodeList
} from '@xarples/accounts-proto-loader'
import { toAuthorizationCodeMessage } from './utils'

export default async function listAuthorizationCodes(
  call: grpc.ServerUnaryCall<AuthorizationCode, AuthorizationCodeList>,
  cb: grpc.sendUnaryData<AuthorizationCodeList>
) {
  try {
    const request = call.request.toObject()
    const authorizationCodes = await db.authorizationCode.findMany({
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

    const message = new AuthorizationCodeList()

    message.setAuthorizationCodeList(
      authorizationCodes.map(toAuthorizationCodeMessage)
    )

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
