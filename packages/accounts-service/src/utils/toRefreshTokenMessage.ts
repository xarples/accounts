import { RefreshToken } from '@xarples/accounts-db'
import { RefreshToken as RefreshTokenMessage } from '@xarples/accounts-proto-loader'

export default function toRefreshTokenMessage(
  item: RefreshToken
): RefreshTokenMessage {
  const message = new RefreshTokenMessage()

  message.setId(item.id)
  message.setClientId(item.client_id)
  message.setToken(item.token)
  message.setCreatedAt(item.created_at.toString())
  message.setUpdatedAt(item.updated_at.toString())

  return message
}
