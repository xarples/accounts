import { AuthService, grpc } from '@xarples/accounts-protos'
import * as service from '@xarples/accounts-service'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || '5001'
const hostname = `${host}:${port}`
const server = new grpc.Server()

server.addService(AuthService, service)

server.bindAsync(
  hostname,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) throw err
    server.start()
    console.log(`Server listening on http://${host}:${port}/`)
  }
)
