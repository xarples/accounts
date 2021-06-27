import { promisify } from 'util'
import client from '@xarples/accounts-client'
import { User, UserList } from '@xarples/accounts-proto-loader'
import { encrypt } from '@xarples/accounts-utils'

const createUser = promisify<User, User>(client.createUser.bind(client))
const getUser = promisify<User, User>(client.getUser.bind(client))
const listUsers = promisify<User, UserList>(client.listUsers.bind(client))
const updateUser = promisify<User, User>(client.updateUser.bind(client))
const deleteUser = promisify<User, User>(client.deleteUser.bind(client))
const signIn = promisify<User, User>(client.signIn.bind(client))

type Options = {
  [K in keyof User.AsObject]?: User.AsObject[K] // so that it retains the types
}

export default class UserService {
  async create(options: Options) {
    const message = new User()

    message.setFirstName(options.firstName!)
    message.setLastName(options.lastName!)
    message.setPassword(options.password!)
    message.setEmail(options.email!)

    const created = await createUser(message)

    return this.reducer(created.toObject())
  }

  async get(options: Options) {
    const message = new User()

    message.setId(options.id!)
    message.setEmail(options.email!)

    const found = await getUser(message)

    return this.reducer(found.toObject())
  }

  async list(options: Options) {
    const message = new User()
    const messageList = await listUsers(message)
    const list = messageList
      .getUserList()
      .map(item => this.reducer(item.toObject()))

    return list
  }

  async update(options: Options) {
    const message = new User()

    message.setId(options.id!)
    message.setFirstName(options.firstName!)
    message.setLastName(options.lastName!)
    message.setPassword(options.password!)

    const updated = await updateUser(message)

    return this.reducer(updated.toObject())
  }

  async delete(options: Options) {
    const message = new User()

    message.setId(options.id!)

    const deleted = await deleteUser(message)

    return this.reducer(deleted.toObject())
  }

  async signIn(options: Pick<Options, 'email' | 'password'>) {
    try {
      const message = new User()

      message.setLastName(options.email!)
      message.setPassword(options.password!)

      const found = await signIn(message)

      return this.reducer(found.toObject())
    } catch (error) {
      throw new Error('Wrong credentials')
    }
  }

  reducer(options: User.AsObject) {
    return {
      id: options.id,
      firstName: options.firstName,
      lastName: options.lastName,
      email: options.email,
      password: options.password,
      createdAt: options.createdAt,
      updatedAt: options.updatedAt
    }
  }
}
