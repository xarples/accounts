import * as db from '@xarples/accounts-db'
import { randomBytes } from '@xarples/accounts-utils'
import { grpc, AccessToken } from '@xarples/accounts-proto-loader'
import { add } from 'date-fns'
import { toAccessTokenMessage } from './utils'

export default async function createAccessToken(
  call: grpc.ServerUnaryCall<AccessToken, AccessToken>,
  cb: grpc.sendUnaryData<AccessToken>
) {
  const request = call.request.toObject()

  const token = await db.accessToken.create({
    data: {
      token: randomBytes(32).toString('hex'),
      expires_in: add(new Date(), { hours: 1 }),
      AuthorizationCode: {
        connect: {
          id: request.authorizationCodeId
        }
      },
      User: {
        connect: {
          id: request.userId
        }
      },
      Client: {
        connect: {
          client_id: request.clientId
        }
      },
      Scopes: {
        connect: request.scopeList.map(scope => ({
          name: scope
        }))
      }
    },
    include: {
      Client: {
        select: {
          client_id: true
        }
      },
      Scopes: {
        select: {
          name: true
        }
      }
    }
  })

  const message = toAccessTokenMessage(token)

  cb(null, message)
}
