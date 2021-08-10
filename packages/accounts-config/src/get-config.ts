import path from 'path'
import fs from 'fs/promises'

export async function getConfig(): Promise<any> {
  const fileNames = await fs.readdir(path.resolve(__dirname, '..', 'config'))

  console.log('++', fileNames)

  return fileNames.reduce(async (prev, current) => {
    const fileContent = await fs.readFile(
      path.resolve(__dirname, '..', 'config', current),
      'utf-8'
    )

    // @ts-ignore
    prev[current] = JSON.parse(fileContent)

    console.log('++', prev)

    return prev
  }, {})
}
