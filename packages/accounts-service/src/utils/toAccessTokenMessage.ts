import { AccessToken } from '@xarples/accounts-db'
import { AccessToken as AccessTokenMessage } from '@xarples/accounts-proto-loader'

export default function toAccessTokenMessage(
  item: AccessToken
): AccessTokenMessage {
  const message = new AccessTokenMessage()

  message.setId(item.id)
  message.setClientId(item.client_id)
  message.setToken(item.token)
  message.setExpiresIn(item.expires_in.toString())
  message.setCreatedAt(item.created_at.toString())
  message.setUpdatedAt(item.updated_at.toString())

  return message
}
