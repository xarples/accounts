import { Scope } from '@xarples/accounts-db'
import { Scope as ScopeMessage } from '@xarples/accounts-protobuf'

export default function getScopeMessage(scope: Scope): ScopeMessage {
  const message = new ScopeMessage()

  message.setId(scope.id)
  message.setName(scope.name)
  message.setDescription(scope.description)
  message.setCreatedAt(scope.created_at.toString())
  message.setUpdatedAt(scope.updated_at.toString())

  return message
}
