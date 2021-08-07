import * as db from '@xarples/accounts-db'
import { grpc, Client, ClientList } from '@xarples/accounts-proto-loader'
import { getClientMessage } from './utils'
import { withAuthorization } from './handlers'

async function listClients(
  call: grpc.ServerUnaryCall<Client, ClientList>,
  cb: grpc.sendUnaryData<ClientList>
) {
  try {
    const metadata = call.metadata.getMap()
    const token = (metadata.authorization as string).split(' ')?.[1]

    const clients = await db.client.findMany({
      where: {
        User: {
          AccessTokens: {
            some: {
              token
            }
          }
        }
      }
    })

    const message = new ClientList()

    message.setClientList(clients.map(getClientMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}

export default withAuthorization<Client, ClientList>(listClients, {
  scopes: ['clients:read']
})
