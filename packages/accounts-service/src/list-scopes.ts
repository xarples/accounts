import * as db from '@xarples/accounts-db'
import { grpc, Scope, ScopeList } from '@xarples/accounts-proto-loader'
import { getScopeMessage } from './utils'

export default async function listScopes(
  _: grpc.ServerUnaryCall<Scope, ScopeList>,
  cb: grpc.sendUnaryData<ScopeList>
) {
  try {
    const Scopes = await db.scope.findMany()
    const message = new ScopeList()

    message.setScopeList(Scopes.map(getScopeMessage))

    cb(null, message)
  } catch (error) {
    cb(error)
  }
}
