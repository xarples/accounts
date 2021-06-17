import { AccountClient, grpc } from '@xarples/accounts-proto-loader'

const port = process.env.GRPC_PORT ?? 5001
const client = new AccountClient(
  `localhost:${port}`,
  grpc.credentials.createInsecure()
)

export default client
