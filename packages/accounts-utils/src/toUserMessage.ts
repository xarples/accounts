import { User } from '@xarples/accounts-db'
import { User as UserMessage } from '@xarples/accounts-proto-loader'

export default function toUserMessage(user: User): UserMessage {
  const message = new UserMessage()

  message.setId(user.id)
  message.setFirstName(user.first_name)
  message.setLastName(user.last_name)
  message.setEmail(user.email)
  message.setCreatedAt(user.created_at.toString())
  message.setUpdatedAt(user.updated_at.toString())

  return message
}
