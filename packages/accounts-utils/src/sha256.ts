import crypto from 'crypto'

export default function sha256(string: string) {
  return crypto
    .createHash('sha256')
    .update(string)
    .digest()
}
