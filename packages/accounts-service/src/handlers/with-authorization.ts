import * as db from '@xarples/accounts-db'
import { grpc } from '@xarples/accounts-proto-loader'

type Fn<RequestType, ResponseType> = (
  call: grpc.ServerUnaryCall<RequestType, ResponseType>,
  cb: grpc.sendUnaryData<ResponseType>
) => Promise<void> | void

interface Options {
  scopes: string[]
}

export function withAuthorization<RequestType, ResponseType>(
  fn: Fn<RequestType, ResponseType>,
  options: Options
) {
  return async function withAuthorizationHandler(
    call: grpc.ServerUnaryCall<RequestType, ResponseType>,
    cb: grpc.sendUnaryData<ResponseType>
  ) {
    const metadata = call.metadata.getMap()

    if (!metadata.authorization) {
      cb({
        code: grpc.status.INVALID_ARGUMENT,
        name: 'invalid_request',
        message: 'Invalid required parameter authorization'
      })

      return
    }

    const token = (metadata.authorization as string).split(' ')?.[1]
    const accessToken = await db.accessToken.verify(token)

    if (!accessToken) {
      cb({
        code: grpc.status.UNAUTHENTICATED,
        name: 'invalid_token',
        message:
          'The access token provided is expired, revoked, malformed, or invalid for other reasons.'
      })

      return
    }

    const hasScopes = db.accessToken.verifyScopes(accessToken, options.scopes)

    if (!hasScopes) {
      cb({
        code: grpc.status.PERMISSION_DENIED,
        name: 'insufficient_scope',
        message:
          'The request requires higher privileges than provided by the access token.'
      })

      return
    }

    // call.metadata.set('accessToken', accessToken)

    fn(call, cb)
  }
}
