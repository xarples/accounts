import crypto from 'crypto'

export default function randomBytes(length: number) {
  return crypto.randomBytes(length)
}
