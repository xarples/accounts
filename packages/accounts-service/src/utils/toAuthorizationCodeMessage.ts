import { AuthorizationCode } from '@xarples/accounts-db'
import { AuthorizationCode as AuthorizationCodeMessage } from '@xarples/accounts-proto-loader'

export default function toUserMessage(
  item: AuthorizationCode
): AuthorizationCodeMessage {
  const message = new AuthorizationCodeMessage()

  message.setId(item.id)
  message.setClientId(item.client_id)
  message.setCode(item.code)
  message.setCodeChallenge(item.code_challenge)
  message.setCodeChallengeMethod(item.code_challenge_method)
  message.setCreatedAt(item.created_at.toString())
  message.setUpdatedAt(item.updated_at.toString())

  return message
}
