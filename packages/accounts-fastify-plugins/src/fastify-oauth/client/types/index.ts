export interface CreateRoute {
  Body: {
    name: string
    description: string
    type: string
    redirect_uris: string[]
  }
}

export interface GetRoute {
  Params: {
    id?: string
    client_id?: string
  }
}

export interface ListRoute {
  Params: {
    id: string
  }
  Querystring: {
    client_id: string
  }
}

export interface UpdateRoute {
  Body: {
    name: string
    description: string
    redirect_uris: string[]
  }
  Params: {
    id: string
  }
}

export interface UpdateSecretRoute {
  Params: {
    id: string
  }
}

export interface DeleteRoute {
  Params: {
    id: string
  }
}
