import { RefreshToken } from '@xarples/accounts-db'
import {
  Client,
  RefreshToken as RefreshTokenMessage
} from '@xarples/accounts-proto-loader'

export default function toRefreshTokenMessage(
  item: RefreshToken & {
    Client: {
      client_id: string | null
    }
    Scopes: {
      name: string
    }[]
  }
): RefreshTokenMessage {
  const message = new RefreshTokenMessage()
  const clientMessage = new Client()

  clientMessage.setClientId(item.Client.client_id!)

  message.setId(item.id)
  message.setAuthorizationCodeId(item.authorization_code_id!)
  message.setUserId(item.user_id!)
  message.setClientId(item.client_id)
  message.setToken(item.token)
  message.setExpiresIn(item.expires_in.toString())
  message.setCreatedAt(item.created_at.toString())
  message.setUpdatedAt(item.updated_at.toString())
  message.setClient(clientMessage)
  message.setScopeList(item.Scopes.map(scope => scope.name))

  return message
}
