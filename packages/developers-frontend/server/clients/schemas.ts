import { FastifySchema } from 'fastify'

const clientObject = {
  type: 'object',
  required: ['name', 'description'],
  properties: {
    client_id: { type: 'string' },
    client_secret: { type: 'string' },
    name: { type: 'string' },
    description: { type: 'string' },
    redirect_uris: {
      type: 'array',
      items: { type: 'string' }
    },
    client_secret_expires_at: { type: 'number' },
    logo_uri: { type: 'string' },
    website_uri: { type: 'string' },
    policy_uri: { type: 'string' },
    tos_uri: { type: 'string' },
    user_id: { type: 'string' },
    client_id_issued_at: { type: 'string' },
    created_at: { type: 'string' },
    updated_at: { type: 'string' }
  }
}

const errorObject = {
  type: 'object',
  properties: {
    error: { type: 'string' },
    error_description: { type: 'string' }
  }
}

export const createClient: FastifySchema = {
  body: {
    type: 'object',
    required: ['name', 'description', 'type', 'redirectUris'],
    properties: {
      name: { type: 'string' },
      description: { type: 'string' },
      type: { type: 'string' },
      redirectUris: {
        type: 'array',
        items: { type: 'string' }
      }
    }
  },
  response: {
    201: clientObject,
    400: errorObject
  }
}

export const getClient: FastifySchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' }
    }
  },
  response: {
    200: clientObject
  }
}

export const listClients: FastifySchema = {
  response: {
    200: {
      type: 'array',
      items: clientObject
    }
  }
}

export const updateClient: FastifySchema = {
  body: {
    type: 'object',
    required: [],
    properties: {
      redirect_uris: {
        type: 'array',
        items: { type: 'string' }
      },
      logo_uri: { type: 'string' },
      policy_uri: { type: 'string' },
      website_uri: { type: 'string' }
    }
  },
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' }
    }
  },
  response: {
    200: clientObject,
    400: errorObject
  }
}

export const updateSecret: FastifySchema = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  },
  response: {
    200: clientObject,
    400: errorObject
  }
}

export const deleteClient: FastifySchema = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string' }
    }
  }
}
