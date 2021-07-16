import { AuthorizationCode } from '@xarples/accounts-db'
import {
  AuthorizationCode as AuthorizationCodeMessage,
  Client
} from '@xarples/accounts-proto-loader'

export default function toAuthorizationCodeMessage(
  item: AuthorizationCode & {
    Client: {
      client_id: string | null
    }
  }
): AuthorizationCodeMessage {
  const clientMessage = new Client()
  const message = new AuthorizationCodeMessage()

  clientMessage.setClientId(item.Client.client_id!)

  message.setId(item.id)
  message.setUserId(item.user_id!)
  message.setClientId(item.client_id)
  message.setCode(item.code)
  message.setCodeChallenge(item.code_challenge)
  message.setCodeChallengeMethod(item.code_challenge_method)
  message.setRedirectUri(item.redirect_uri)
  message.setExpiresIn(item.expires_in.toString())
  message.setCreatedAt(item.created_at.toString())
  message.setUpdatedAt(item.updated_at.toString())
  message.setClient(clientMessage)

  return message
}
