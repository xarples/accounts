import { base64URLEncode } from './base64URLEncode'
import { randomBytes } from './randomBytes'

export function codeVerifier() {
  return base64URLEncode(randomBytes(32))
}
