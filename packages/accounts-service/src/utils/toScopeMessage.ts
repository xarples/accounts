import { Scope } from '@xarples/accounts-db'
import { Scope as ScopeMessage } from '@xarples/accounts-proto-loader'

export default function toScopeMessage(scope: Scope): ScopeMessage {
  const message = new ScopeMessage()

  message.setId(scope.id)
  message.setName(scope.name)
  message.setDescription(scope.description)
  message.setCreatedAt(scope.created_at.toString())
  message.setUpdatedAt(scope.updated_at.toString())

  return message
}
