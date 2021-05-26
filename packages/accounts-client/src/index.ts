import { AuthClient, grpc } from '@xarples/accounts-protos'

const port = process.env.GRPC_PORT ?? 5001
const client = new AuthClient(
  `localhost:${port}`,
  grpc.credentials.createInsecure()
)

export default client
