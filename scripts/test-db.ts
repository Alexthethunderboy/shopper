import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.$connect()
    console.log('Successfully connected to MongoDB!')
    
    // Try to create a test user
    const user = await prisma.user.create({
      data: {
        name: 'Test User',
        email: 'test@test.com',
        password: 'password123'
      }
    })
    console.log('Successfully created test user:', user)
  } catch (error) {
    console.error('Connection error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 