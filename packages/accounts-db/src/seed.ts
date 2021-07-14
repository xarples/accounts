// @ts-ignore
import { ClientType, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: [
      {
        first_name: 'Test',
        last_name: '1',
        email: 'test@test.com',
        password:
          '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'
      }
    ],
    skipDuplicates: true
  })

  await prisma.client.createMany({
    data: [
      {
        name: 'Accounts Developers',
        description: 'App to allow developers make their own applications',
        type: ClientType.web,
        client_id:
          '5c1954c928d3b1317fb8bcf66604c59e583efbf38556e03c6768eadeb2e15bd0',
        client_secret:
          'ceac77ba4ceba7d0fc8011fa82383b3f64cc7a1580f000182b7aba77adc31607',
        redirect_uris: ['http://localhost:5002/callback']
      }
    ],
    skipDuplicates: true
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
