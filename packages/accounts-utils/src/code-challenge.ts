import { base64URLEncode } from './base64-url-encode'
import { sha256 } from './sha256'

interface Options {
  codeChallengeMethod: 'plain' | 'S256'
}

export function codeChallenge(codeVerifier: string, options: Options) {
  if (options.codeChallengeMethod === 'plain') {
    return codeVerifier
  }

  return base64URLEncode(sha256(codeVerifier))
}
