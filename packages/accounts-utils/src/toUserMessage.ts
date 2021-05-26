import { User } from '@xarples/accounts-db'
import { User as UserMessage } from '@xarples/accounts-protos'

export default function toUserMessage(user: User): UserMessage {
  const message = new UserMessage()

  message.setId(user.id)
  message.setUsername(user.username)
  message.setPassword(user.password)
  message.setEmail(user.email)
  message.setCreatedAt(user.created_at.toString())
  message.setUpdatedAt(user.updated_at.toString())

  return message
}
