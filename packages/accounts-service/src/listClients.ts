import * as db from '@xarples/accounts-db'
import { grpc, Client, ClientList } from '@xarples/accounts-proto-loader'
import { toClientMessage } from './utils'

export default async function listClients(
  call: grpc.ServerUnaryCall<Client, ClientList>,
  cb: grpc.sendUnaryData<ClientList>
) {
  try {
    // const request = call.request.toObject()
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

    const hasScopes = db.accessToken.verifyScopes(accessToken, ['clients:read'])

    if (!hasScopes) {
      cb({
        code: grpc.status.PERMISSION_DENIED,
        name: 'insufficient_scope',
        message:
          'The request requires higher privileges than provided by the access token.'
      })

      return
    }

    const clients = await db.client.findMany({
      where: {
        user_id: accessToken.user_id
      }
    })

    const message = new ClientList()

    message.setClientList(clients.map(toClientMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
