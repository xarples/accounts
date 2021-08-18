import { add, getUnixTime } from 'date-fns'
import { SignJWT } from 'jose/jwt/sign'
import { parseJwk } from 'jose/jwk/parse'
import { cuid } from '@xarples/accounts-utils'
import {
  grpc,
  IdTokenRequest,
  IdTokenResponse
} from '@xarples/accounts-protobuf'
import privateJWK from '@xarples/accounts-config/config/private-jwk.json'

export default async function createIdToken(
  call: grpc.ServerUnaryCall<IdTokenRequest, IdTokenResponse>,
  cb: grpc.sendUnaryData<IdTokenResponse>
) {
  try {
    const message = new IdTokenResponse()
    const request = call.request.toObject()
    const signKey = await parseJwk(privateJWK)
    const id = cuid()

    const token = new SignJWT({
      iss: 'http://localhost:5000',
      sub: request.userId,
      client_id: request.clientId,
      jti: id,
      aud: request.audienceList,
      nonce: request.nonce,
      scopes: request.scopeList,
      exp: getUnixTime(add(new Date(), { hours: 1 })),
      iat: getUnixTime(new Date()),
      auth_time: getUnixTime(new Date())
    })

    const jwt = await token.setProtectedHeader({ alg: 'RS256' }).sign(signKey)

    message.setToken(jwt)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
