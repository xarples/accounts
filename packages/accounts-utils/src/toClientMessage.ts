import { Client } from '@xarples/accounts-db'
import { Client as ClientMessage } from '@xarples/accounts-protos'

export default function toClientMessage(client: Client): ClientMessage {
  const message = new ClientMessage()

  message.setId(client.id)
  message.setSecret(client.secret)
  message.setName(client.name)
  message.setName(client.description)
  message.setTokenEndpointAuthMethod(client.token_endpoint_auth_method!)
  message.setRedirectUrisList(client.redirect_uris!)
  message.setLogoUri(client.logo_uri!)
  message.setLogoUri(client.website_uri!)
  message.setLogoUri(client.policy_uri!)
  message.setLogoUri(client.user_id!)
  message.setCreatedAt(client.created_at.toString())
  message.setUpdatedAt(client.updated_at.toString())

  return message
}
