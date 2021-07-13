import { codeChallenge } from './codeChallenge'

interface Options {
  codeChallengeMethod: string
  codeVerifier: string
}

export function calculateCodeChallenge(options: Options) {
  if (options.codeChallengeMethod === 'plain') {
    return options.codeVerifier
  }

  return codeChallenge(options.codeVerifier)
}
