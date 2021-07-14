interface Options {
  username: string
  password: string
}

export function encodeBasic(options: Options) {
  return Buffer.from(`${options.username}:${options.password}`).toString(
    'base64'
  )
}
