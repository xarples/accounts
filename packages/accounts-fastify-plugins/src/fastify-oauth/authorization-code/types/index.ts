export interface AuthorizationCodeResponse {
  id: string
  user_id: string
  client_id: string
  code: string
  code_challenge: string
  code_challenge_method: string
  redirect_uri: string
  expires_in: string
  created_at: string
  updated_at: string
  scopes: string[]
}
