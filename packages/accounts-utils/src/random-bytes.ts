import crypto from 'crypto'

export function randomBytes(length: number) {
  return crypto.randomBytes(length)
}
