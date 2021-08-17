import path from 'path'
import fs from 'fs/promises'

export async function getConfig(): Promise<any> {
  const fileNames = await fs.readdir(path.resolve(__dirname, '..', 'config'))

  return fileNames.reduce(async (prev, current) => {
    const fileContent = await fs.readFile(
      path.resolve(__dirname, '..', 'config', current),
      'utf-8'
    )

    // @ts-ignore
    prev[current] = JSON.parse(fileContent)

    return prev
  }, {})
}
