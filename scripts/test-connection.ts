import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.$connect()
    console.log('Successfully connected to MongoDB!')
  } catch (error) {
    console.error('Connection error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 