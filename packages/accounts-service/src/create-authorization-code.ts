import { CodeChallengeMethod } from '@xarples/accounts-db'
import * as db from '@xarples/accounts-db'
import { randomBytes } from '@xarples/accounts-utils'
import { grpc, AuthorizationCode } from '@xarples/accounts-protobuf'
import { add } from 'date-fns'
import { getAuthorizationCodeMessage } from './utils'

export default async function createAuthorizationCode(
  call: grpc.ServerUnaryCall<AuthorizationCode, AuthorizationCode>,
  cb: grpc.sendUnaryData<AuthorizationCode>
) {
  try {
    const request = call.request.toObject()

    const code = await db.authorizationCode.create({
      data: {
        code: randomBytes(32).toString('hex'),
        code_challenge: request.codeChallenge,
        code_challenge_method:
          CodeChallengeMethod[
            request.codeChallengeMethod as CodeChallengeMethod
          ],
        redirect_uri: request.redirectUri,
        expires_in: add(new Date(), { seconds: 30 }),
        User: {
          connect: {
            id: request.userId
          }
        },
        Client: {
          connect: {
            id: request.clientId
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

    const message = getAuthorizationCodeMessage(code)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
