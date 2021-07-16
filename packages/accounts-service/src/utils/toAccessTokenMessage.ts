import { AccessToken } from '@xarples/accounts-db'
import {
  AccessToken as AccessTokenMessage,
  Client
} from '@xarples/accounts-proto-loader'

export default function toAccessTokenMessage(
  item: AccessToken & {
    Client: {
      client_id: string | null
    }
  }
): AccessTokenMessage {
  const message = new AccessTokenMessage()
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

  return message
}
