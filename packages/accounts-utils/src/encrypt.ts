import crypto from 'crypto'

export default function encrypt(password: string) {
  return crypto
    .createHash('sha256')
    .update(password)
    .digest('hex')
}
