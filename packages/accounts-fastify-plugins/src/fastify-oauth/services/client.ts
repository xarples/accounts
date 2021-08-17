import { promisify } from 'util'
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify'
import fp from 'fastify-plugin'
import auth from 'basic-auth'
import client from '@xarples/accounts-client'
import { Client, grpc } from '@xarples/accounts-protobuf'
import { ClientResponse } from '../types'

const authenticateClient = promisify<Client, Client>(
  client.authenticateClient.bind(client)
)
const getClient = promisify<Client, Client>(client.getClient.bind(client))
const updateClient = promisify<Client, Client>(client.updateClient.bind(client))
const updateClientSecret = promisify<Client, Client>(
  client.updateClientSecret.bind(client)
)
const deleteClient = promisify<Client, Client>(client.deleteClient.bind(client))

type Options = {
  [K in keyof Client.AsObject]?: Client.AsObject[K] // so that it retains the types
}

interface Context {
  request: FastifyRequest
  reply: FastifyReply
}

export class ClientService {
  context: Context | undefined

  setContext(context: Context) {
    this.context = context
  }

  async create(options: Options): Promise<ClientResponse> {
    const message = new Client()
    const metadata = new grpc.Metadata()
    const authorization =
      this.context?.request.headers.authorization ||
      (this?.context?.request.session.accessToken
        ? `Bearer ${this?.context?.request.session.accessToken}`
        : '')

    metadata.set('authorization', authorization)

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

  async list(options: Options): Promise<ClientResponse[]> {
    const message = new Client()
    const metadata = new grpc.Metadata()
    const authorization =
      this.context?.request.headers.authorization ||
      (this?.context?.request.session.accessToken
        ? `Bearer ${this?.context?.request.session.accessToken}`
        : '')

    metadata.set('authorization', authorization)

    return new Promise((resolve, reject) => {
      client.listClients(message, metadata, (err, clientList) => {
        if (err) {
          return reject(err)
        }

        resolve(
          clientList
            .getClientList()
            .map(client => this.reducer(client.toObject()))
        )
      })
    })
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

  async authenticateClient(options: Pick<Options, 'id' | 'secret'>) {
    try {
      const message = new Client()

      message.setId(options.id!)
      message.setSecret(options.secret!)

      const found = await authenticateClient(message)

      return this.reducer(found.toObject())
    } catch (error) {
      throw new Error('Wrong credentials')
    }
  }

  async basicAuth(request: any) {
    try {
      const result = auth(request)

      if (!result) {
        return undefined
      }

      const message = new Client()

      message.setId(result.name)
      message.setSecret(result.pass)

      const found = await authenticateClient(message)

      if (!found) {
        return undefined
      }

      return this.reducer(found.toObject())
    } catch (error) {
      return undefined
    }
  }

  async privateKeyJWTAuth() {}

  reducer(options: Client.AsObject): ClientResponse {
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

const service = new ClientService()

const plugin: FastifyPluginAsync = async fastify => {
  fastify.decorate('clientService', service)

  fastify.addHook('preHandler', (request, reply, done) => {
    service.setContext({ request, reply })
    done()
  })
}

export const clientService = fp(plugin, '3.x')
