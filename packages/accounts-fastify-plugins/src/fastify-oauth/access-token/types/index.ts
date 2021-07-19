export interface AccessTokenResponse {
  id: string
  authorization_code_id: string
  user_id: string
  client_id: string
  token: string
  scopes: string[]
  expires_in: string
  created_at: string
  updated_at: string
}
