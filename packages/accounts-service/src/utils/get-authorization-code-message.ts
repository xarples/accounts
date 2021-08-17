import { AuthorizationCode } from '@xarples/accounts-db'
import { AuthorizationCode as AuthorizationCodeMessage } from '@xarples/accounts-protobuf'

export default function getAuthorizationCodeMessage(
  item: AuthorizationCode & {
    Scopes: {
      name: string
    }[]
  }
): AuthorizationCodeMessage {
  const message = new AuthorizationCodeMessage()

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
  message.setScopeList(item.Scopes.map(scope => scope.name))

  return message
}
