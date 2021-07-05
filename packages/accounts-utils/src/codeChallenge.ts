import { base64URLEncode } from './base64URLEncode'
import { sha256 } from './sha256'

export function codeChallenge(codeVerifier: string) {
  return base64URLEncode(sha256(codeVerifier))
}
