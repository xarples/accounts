import { Client } from '@xarples/accounts-db'
import { Client as ClientMessage } from '@xarples/accounts-protobuf'

export default function getClientMessage(client: Client): ClientMessage {
  const message = new ClientMessage()

  message.setId(client.id)
  // message.setSecret(client.secret!)
  message.setName(client.name!)
  message.setDescription(client.description!)
  message.setApplicationType(client.application_type!)
  // message.setTokenEndpointAuthMethod(client.token_endpoint_auth_method!)
  message.setRedirectUriList(client.redirect_uris!)
  message.setLogoUri(client.logo_uri!)
  message.setClientUri(client.client_uri!)
  message.setPolicyUri(client.policy_uri!)
  // message.setUserId(client.user_id!)
  message.setCreatedAt(client.created_at.toString())
  message.setUpdatedAt(client.updated_at.toString())

  return message
}
