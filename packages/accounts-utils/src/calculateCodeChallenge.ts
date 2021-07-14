import { codeChallenge } from './codeChallenge'

interface Options {
  codeChallengeMethod: 'plain' | 'S256'
  codeVerifier: string
}

export function calculateCodeChallenge(options: Options) {
  if (options.codeChallengeMethod === 'plain') {
    return options.codeVerifier
  }

  return codeChallenge(options.codeVerifier)
}
