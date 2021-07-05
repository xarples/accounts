import db, { CodeChallengeMethod } from '@xarples/accounts-db'
import { randomBytes } from '@xarples/accounts-utils'
import { grpc, AuthorizationCode } from '@xarples/accounts-proto-loader'
import { toAuthorizationCodeMessage } from './utils'

export default async function createAuthorizationCode(
  call: grpc.ServerUnaryCall<AuthorizationCode, AuthorizationCode>,
  cb: grpc.sendUnaryData<AuthorizationCode>
) {
  const request = call.request.toObject()

  const code = await db.authorizationCode.create({
    data: {
      code: randomBytes(32).toString('hex'),
      code_challenge: request.codeChallenge,
      code_challenge_method:
        CodeChallengeMethod[request.codeChallengeMethod as CodeChallengeMethod],
      Client: {
        connect: {
          client_id: request.clientId
        }
      }
    },
    include: {
      Client: true
    }
  })

  const message = toAuthorizationCodeMessage(code)

  cb(null, message)
}
