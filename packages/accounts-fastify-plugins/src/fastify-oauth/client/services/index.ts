import { promisify } from 'util'
import { FastifyRequest } from 'fastify'
import auth from 'basic-auth'
import client from '@xarples/accounts-client'
import { Client, ClientList, grpc } from '@xarples/accounts-proto-loader'
import { IncomingMessage, Server } from 'http'
import { RouteGenericInterface } from 'fastify/types/route'

// const createClient = promisify<Client, Client>(client.createClient.bind(client))
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

interface Context {
  request: FastifyRequest<RouteGenericInterface, Server, IncomingMessage>
}

export class ClientService {
  context: Context | undefined

  setContext(context: Context) {
    this.context = context
  }

  async create(options: Options) {
    const message = new Client()
    const metadata = new grpc.Metadata()

    metadata.set(
      'authorization',
      this.context?.request?.headers?.authorization || ''
    )

    message.setName(options.name!)
    message.setDescription(options.description!)
    message.setApplicationType(options.applicationType!)
    message.setRedirectUriList(options.redirectUriList!)

    return new Promise((resolve, reject) => {
      client.createClient(message, metadata, (err, created) => {
        if (err) {
          return reject(err)
        }

        resolve(this.reducer(created.toObject()))
      })
    })
  }

  async get(options: Options) {
    try {
      const message = new Client()

      message.setId(options.id!)

      const client = await getClient(message)

      return this.reducer(client.toObject())
    } catch (error) {
      return null
    }
  }

  async list(options: Options) {
    const message = new Client()

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

  async basicAuth(request: any) {
    try {
      const result = auth(request)

      if (!result) {
        return undefined
      }

      const message = new Client()

      message.setId(result.name)

      const client = await getClient(message)

      if (client.getSecret() !== result.pass) {
        return undefined
      }

      return this.reducer(client.toObject())
    } catch (error) {
      return undefined
    }
  }

  async privateKeyJWTAuth() {}

  verifyAuth(request: any) {
    if (request.headers.authorization) {
      return this.verifyBasicAuth(request)
    }
  }

  verifyBasicAuth(request: any) {
    try {
      const result = auth(request)

      if (!result) {
        return undefined
      }

      return { clientId: result.name, clientSecret: result.pass }
    } catch (error) {
      return undefined
    }
  }

  reducer(options: Client.AsObject) {
    return {
      user_id: options.userId,
      client_id: options?.id,
      client_secret: options.secret,
      client_name: options.name,
      client_description: options.description,
      application_type: options.applicationType,
      token_endpoint_auth_method: options.tokenEndpointAuthMethod,
      redirect_uris: options.redirectUriList,
      logo_uri: options.logoUri,
      client_uri: options.clientUri,
      policy_uri: options.policyUri,
      tos_uri: options.tosUri,
      client_secret_expires_at: 0,
      client_id_issued_at: options.createdAt,
      created_at: options.createdAt,
      updated_at: options.updatedAt
    }
  }
}
