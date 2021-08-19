import {
  grpc,
  GetJWKSRequest,
  GetJWKSResponse
} from '@xarples/accounts-protobuf'

import jwks from '@xarples/accounts-config/config/jwks.json'

export default async function getScope(
  _: grpc.ServerUnaryCall<GetJWKSRequest, GetJWKSResponse>,
  cb: grpc.sendUnaryData<GetJWKSResponse>
) {
  try {
    const message = new GetJWKSResponse()

    message.setJwks(JSON.stringify(jwks))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
