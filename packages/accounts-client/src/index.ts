import { AccountClient, grpc } from '@xarples/accounts-protobuf'

const host = process.env.GRPC_SERVER_HOST || '127.0.0.1'
const port = process.env.GRPC_SERVER_PORT || 5001
const client = new AccountClient(
  `${host}:${port}`,
  grpc.credentials.createInsecure()
)

export default client
