import * as db from '@xarples/accounts-db'
import { randomBytes } from '@xarples/accounts-utils'
import { grpc, Client } from '@xarples/accounts-proto-loader'
import { getClientMessage } from './utils'
import { withAuthorization } from './handlers'

async function createClient(
  call: grpc.ServerUnaryCall<Client, Client>,
  cb: grpc.sendUnaryData<Client>
) {
  try {
    const request = call.request.toObject()
    const metadata = call.metadata.getMap()
    const token = (metadata.authorization as string).split(' ')?.[1]
    const accessToken = await db.accessToken.verify(token)

    const client = await db.client.create({
      data: {
        user_id: accessToken!.user_id,
        secret: randomBytes(32).toString('hex'),
        name: request.name,
        description: request.description,
        application_type:
          db.ClientType[request.applicationType as db.ClientType],
        redirect_uris: request.redirectUriList
      }
    })

    const message = getClientMessage(client)

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Client, Client>(createClient, {
  scopes: ['clients:write']
})
