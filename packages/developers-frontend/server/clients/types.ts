export interface CreateRoute {
  Body: {
    name: string
    description: string
    type: string
    redirectUris: string[]
  }
}

export interface GetRoute {
  Params: {
    id: string
  }
}

export interface ListRoute {
  Params: {
    id: string
  }
}

export interface UpdateRoute {
  Body: {
    redirect_uris?: string[]
    logo_uri?: string
    policy_uri?: string
    website_uri?: string
  }
  Params: {
    id: string
  }
}
