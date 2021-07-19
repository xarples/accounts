export interface CreateClientRequest {
  Body: {
    client_name: string
    client_description: string
    application_type: string
    redirect_uris: string[]
  }
}

export interface GetClientRequest {
  Params: {
    id?: string
    client_id?: string
  }
}

export interface ListClientsRequest {
  Params: {
    id: string
  }
  Querystring: {
    client_id: string
  }
}

export interface UpdateClientRequest {
  Body: {
    client_name: string
    client_description: string
    redirect_uris: string[]
  }
  Params: {
    id: string
  }
}

export interface UpdateClientSecretRequest {
  Params: {
    id: string
  }
}

export interface DeleteClientRequest {
  Params: {
    id: string
  }
}
