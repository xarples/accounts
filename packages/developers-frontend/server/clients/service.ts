import { promisify } from 'util'
import client from '@xarples/accounts-client'
import { Client, ClientList } from '@xarples/accounts-proto-loader'
import { cuid } from '@xarples/accounts-utils'

const createClient = promisify<Client, Client>(client.createClient.bind(client))
const getClient = promisify<Client, Client>(client.getClient.bind(client))
const listClients = promisify<Client, ClientList>(
  client.listClients.bind(client)
)
const updateClient = promisify<Client, Client>(client.updateClient.bind(client))
const deleteClient = promisify<Client, Client>(client.deleteClient.bind(client))

type Options = {
  [K in keyof Client.AsObject]?: Client.AsObject[K] // so that it retains the types
}

export default class ClientService {
  async create(options: Options) {
    const message = new Client()

    message.setName(options.name!)
    message.setDescription(options.description!)

    const client = await createClient(message)

    return this.reducer(client.toObject())
  }

  async get(options: Options) {
    const message = new Client()

    message.setId(options.id!)

    const client = await getClient(message)

    return this.reducer(client.toObject())
  }

  async list(options: Options) {
    console.log(options)
    const message = new Client()
    const clientList = await listClients(message)
    const clients = clientList
      .getClientList()
      .map(client => this.reducer(client.toObject()))

    return clients
  }

  async update(options: Options) {
    const message = new Client()

    message.setId(options.id!)
    message.setName(options.name!)
    message.setDescription(options.description!)

    const client = await updateClient(message)

    return this.reducer(client.toObject())
  }

  async updateSecret(options: Options) {
    const id = cuid()
    const message = new Client()

    message.setId(options.id!)
    message.setSecret(id)

    const client = await updateClient(message)

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
      client_id: options.id,
      client_secret: options.secret,
      name: options.name,
      description: options.description,
      redirect_uris: options.redirectUrisList,
      client_secret_expires_at: 0,
      logoUri: options.logoUri,
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
