import { promisify } from 'util'
import client from '@xarples/accounts-client'
import { Client } from '@xarples/accounts-proto-loader'

const getClient = promisify<Client, Client>(client.getClient.bind(client))

export class BasicAuthService {
  async authenticate(options: { username: string; password: string }) {
    try {
      const message = new Client()

      message.setClientId(options.username)

      const client = await getClient(message)

      if (client.getClientSecret() !== options.password) {
        throw new Error('Wrong credentials')
      }

      return true
    } catch (error) {
      throw new Error('Wrong credentials')
    }
  }
}
