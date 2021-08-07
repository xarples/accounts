import * as db from '@xarples/accounts-db'
import { randomBytes } from '@xarples/accounts-utils'
import { grpc, AccessToken } from '@xarples/accounts-proto-loader'
import { add } from 'date-fns'
import { getAccessTokenMessage } from './utils'

export default async function createAccessToken(
  call: grpc.ServerUnaryCall<AccessToken, AccessToken>,
  cb: grpc.sendUnaryData<AccessToken>
) {
  try {
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
        Client: {
          connect: {
            id: request.clientId
          }
        },
        User: {
          connect: {
            id: request.userId
          }
        },
        Scopes: {
          connect: request.scopeList.map(scope => ({
            name: scope
          }))
        }
      },
      include: {
        Scopes: {
          select: {
            name: true
          }
        }
      }
    })

    const message = getAccessTokenMessage(token)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
