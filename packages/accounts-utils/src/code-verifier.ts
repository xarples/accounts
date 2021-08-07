import { base64URLEncode } from './base64-url-encode'
import { randomBytes } from './random-bytes'

export function codeVerifier() {
  return base64URLEncode(randomBytes(32))
}
