import path from 'path'
import fs from 'fs/promises'
import { generateKeyPair } from 'jose/util/generate_key_pair'
import { fromKeyLike } from 'jose/jwk/from_key_like'

const basePath = path.resolve(__dirname, '..', 'config')

export async function generateConfig() {
  const { publicKey, privateKey } = await generateKeyPair('RS256')
  const privateJWK = await fromKeyLike(privateKey)
  const publicJWK = await fromKeyLike(publicKey)
  const jwks = { keys: [publicJWK] }

  privateJWK.alg = 'RS256'
  privateJWK.use = 'sig'
  publicJWK.alg = 'RS256'
  publicJWK.use = 'sig'

  Promise.all([
    writeFile('private-jwk.json', privateJWK),
    writeFile('public-jwk.json', publicJWK),
    writeFile('jwks.json', jwks)
  ])
}

function writeFile(fileName: string, data: any) {
  fs.writeFile(path.resolve(basePath, fileName), JSON.stringify(data, null, 2))
}

generateConfig()
