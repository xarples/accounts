import { promisify } from 'util'
import client from '@xarples/accounts-client'
import { Client, ClientList } from '@xarples/accounts-proto-loader'

const createClient = promisify<Client, Client>(client.createClient.bind(client))
const getClient = promisify<Client, Client>(client.getClient.bind(client))
const listClients = promisify<Client, ClientList>(
  client.listClients.bind(client)
)
const updateClient = promisify<Client, Client>(client.updateClient.bind(client))
const updateClientSecret = promisify<Client, Client>(
  client.updateClientSecret.bind(client)
)
const deleteClient = promisify<Client, Client>(client.deleteClient.bind(client))

type Options = {
  [K in keyof Client.AsObject]?: Client.AsObject[K] // so that it retains the types
}

export class ClientService {
  async create(options: Options) {
    const message = new Client()

    message.setName(options.name!)
    message.setDescription(options.description!)
    message.setType(options.type!)
    message.setRedirectUriList(options.redirectUriList!)

    const client = await createClient(message)

    return this.reducer(client.toObject())
  }

  async get(options: Options) {
    const message = new Client()

    message.setId(options.id!)
    message.setClientId(options.clientId!)

    const client = await getClient(message)

    return this.reducer(client.toObject())
  }

  async list(options: Options) {
    const message = new Client()

    message.setClientId(options.clientId!)

    const clientList = await listClients(message)

    return clientList
      .getClientList()
      .map(client => this.reducer(client.toObject()))
  }

  async update(options: Options) {
    const message = new Client()

    message.setId(options.id!)
    message.setName(options.name!)
    message.setDescription(options.description!)
    message.setRedirectUriList(options.redirectUriList!)

    const client = await updateClient(message)

    return this.reducer(client.toObject())
  }

  async updateSecret(options: Options) {
    const message = new Client()

    message.setId(options.id!)

    const client = await updateClientSecret(message)

    return this.reducer(client.toObject())
  }

  async delete(options: Options) {
    const message = new Client()

    message.setId(options.id!)

    const client = await deleteClient(message)

    return this.reducer(client.toObject())
  }

  reducer(options: Client.AsObject) {
    return {
      id: options.id,
      client_id: options.clientId,
      client_secret: options.clientSecret,
      name: options.name,
      description: options.description,
      type: options.type,
      redirect_uris: options.redirectUriList,
      client_secret_expires_at: 0,
      logo_uri: options.logoUri,
      website_uri: options.websiteUri,
      policy_uri: options.policyUri,
      tos_uri: options.tosUri,
      user_id: options.userId,
      client_id_issued_at: options.createdAt,
      created_at: options.createdAt,
      updated_at: options.updatedAt
    }
  }
}
