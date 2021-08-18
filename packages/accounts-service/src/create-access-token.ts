import { add, getUnixTime } from 'date-fns'
import { SignJWT } from 'jose/jwt/sign'
import { parseJwk } from 'jose/jwk/parse'
import { cuid } from '@xarples/accounts-utils'
import { grpc, AccessToken } from '@xarples/accounts-protobuf'
import * as db from '@xarples/accounts-db'
import privateJWK from '@xarples/accounts-config/config/private-jwk.json'
import { getAccessTokenMessage } from './utils'

export default async function createAccessToken(
  call: grpc.ServerUnaryCall<AccessToken, AccessToken>,
  cb: grpc.sendUnaryData<AccessToken>
) {
  try {
    const request = call.request.toObject()
    const signKey = await parseJwk(privateJWK)
    const id = cuid()

    const token = new SignJWT({
      iss: 'http://localhost:5000',
      sub: request.userId,
      client_id: request.clientId,
      jti: id,
      aud: request.audienceList,
      scopes: request.scopeList,
      exp: getUnixTime(add(new Date(), { hours: 1 })),
      iat: getUnixTime(new Date()),
      auth_time: getUnixTime(new Date())
    })

    const jwt = await token
      .setProtectedHeader({ alg: 'RS256', typ: 'at+jwt' })
      .sign(signKey)

    const created = await db.accessToken.create({
      data: {
        id,
        token: jwt,
        audience: request.audienceList,
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

    const message = getAccessTokenMessage(created)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
