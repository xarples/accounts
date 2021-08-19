export interface AccessTokenResponse {
  id: string
  authorization_code_id: string
  client_id: string
  user_id: string
  token: string
  audience: string[]
  scopes: string[]
  expires_in: string
  created_at: string
  updated_at: string
}

export interface AuthorizationCodeResponse {
  id: string
  client_id: string
  user_id: string
  code: string
  code_challenge: string
  code_challenge_method: string
  redirect_uri: string
  audience: string[]
  scopes: string[]
  expires_in: string
  created_at: string
  updated_at: string
}

export interface CreateClientRequest {
  Body: {
    client_name: string
    client_description: string
    application_type: string
    redirect_uris: string[]
  }
}

export interface ClientResponse {
  user_id: string
  client_id: string
  client_secret: string
  client_name: string
  client_description: string
  application_type: string
  token_endpoint_auth_method: string
  redirect_uris: string[]
  logo_uri: string
  client_uri: string
  policy_uri: string
  tos_uri: string
  client_secret_expires_at: 0
  client_id_issued_at: string
  created_at: string
  updated_at: string
}

export interface GetClientRequest {
  Params: {
    id?: string
    client_id?: string
  }
}

export interface ListClientsRequest {}

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

export interface RefreshTokenResponse {
  id: string
  authorization_code_id: string
  client_id: string
  user_id: string
  token: string
  audience: string[]
  scopes: string[]
  expires_in: string
  created_at: string
  updated_at: string
}

export interface ScopeResponse {
  id: string
  name: string
  description: string
  created_at: string
  updated_at: string
}

export interface ListScopesRequest {}

export interface AuthorizationRequest {
  Querystring: {
    client_id: string
    code_challenge: string
    code_challenge_method: string
    redirect_uri: string
    response_type: string
    response_mode?: 'web_message'
    resource: string | string[]
    scope?: string
    state?: string
  }
}

export interface AuthorizationConsentRequest {
  Body: {
    client_id: string
    code_challenge: string
    code_challenge_method: string
    redirect_uri: string
    response_type: string
    resource: string | string[]
    scope?: string
    state?: string
  }
  Params: {
    consent: 'allow' | 'deny'
  }
}

export interface TokenRequest {
  Body: {
    code?: string
    code_verifier?: string
    client_id?: string
    grant_type: 'authorization_code'
    redirect_uri?: string
    scope?: string
    resource?: string[]
    nonce?: string
  }
}

export interface ClientCredentialsGrantRequest {
  Body: {
    grant_type: 'client_credentials'
    refresh_token: string
    resource?: string[]
    scope?: string
  }
}

export interface RefreshTokenRequest {
  Body: {
    grant_type: 'refresh_token'
    refresh_token?: string
  }
}

export interface IntrospectRequest {
  Body: {
    token: string
    token_type_hint: 'access_token' | 'refresh_token'
  }
}

export interface RevokeRequest {
  Body: {
    token: string
    token_type_hint?: 'access_token' | 'refresh_token'
  }
}
