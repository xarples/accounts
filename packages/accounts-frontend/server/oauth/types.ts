export interface GetAuthorizeRoute {
  Querystring: {
    client_id: string
    code_challenge: string
    code_challenge_method: string
    redirect_uri: string
    response_type: string
    scope?: string
    state?: string
  }
}

export interface PostAuthorizeRoute {
  Body: {
    client_id: string
    code_challenge: string
    code_challenge_method: string
    redirect_uri: string
    response_type: string
    scope?: string
    state?: string
  }
  Params: {
    consent: 'allow' | 'deny'
  }
}

export interface PostTokenRoute {
  Body: {
    code: string
    code_verifier: string
    client_id: string
    grant_type: 'authorization_code'
    redirect_uri: string
  }
}
