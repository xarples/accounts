import db from '@xarples/accounts-db'
import { randomBytes } from '@xarples/accounts-utils'
import { grpc, RefreshToken } from '@xarples/accounts-proto-loader'
import { add } from 'date-fns'
import { toRefreshTokenMessage } from './utils'

export default async function createRefreshToken(
  call: grpc.ServerUnaryCall<RefreshToken, RefreshToken>,
  cb: grpc.sendUnaryData<RefreshToken>
) {
  const request = call.request.toObject()

  const token = await db.refreshToken.create({
    data: {
      token: randomBytes(32).toString('hex'),
      expires_in: add(new Date(), { months: 1 }),
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
      }
    },
    include: {
      Client: {
        select: {
          client_id: true
        }
      }
    }
  })

  const message = toRefreshTokenMessage(token)

  cb(null, message)
}
