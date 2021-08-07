interface Options {
  username: string
  password: string
}

export function decodeBasic(string: string) {
  if (!string.startsWith('Basic')) {
    return null
  }

  const decoded = Buffer.from(string.split(' ')[1], 'base64').toString()
  const [clientId, clientSecret] = decoded.split(':')

  return { clientId, clientSecret }
}
