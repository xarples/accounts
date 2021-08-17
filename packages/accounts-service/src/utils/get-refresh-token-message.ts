import { RefreshToken } from '@xarples/accounts-db'
import { RefreshToken as RefreshTokenMessage } from '@xarples/accounts-protobuf'

export default function getRefreshTokenMessage(
  item: RefreshToken & {
    Scopes: {
      name: string
    }[]
  }
): RefreshTokenMessage {
  const message = new RefreshTokenMessage()

  message.setId(item.id)
  message.setAuthorizationCodeId(item.authorization_code_id!)
  message.setUserId(item.user_id!)
  message.setClientId(item.client_id)
  message.setToken(item.token)
  message.setExpiresIn(item.expires_in.toString())
  message.setCreatedAt(item.created_at.toString())
  message.setUpdatedAt(item.updated_at.toString())
  message.setScopeList(item.Scopes.map(scope => scope.name))

  return message
}
