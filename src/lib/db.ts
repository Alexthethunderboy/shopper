import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export async function getUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        image: true,
      },
    });
    return user;
  } catch (error) {
    console.error('Error getting user by email:', error instanceof Error ? error.message : String(error));
    throw new Error('Failed to get user');
  }
}

export async function createUser(data: {
  email: string;
  name: string;
  password: string;
}) {
  try {
    const user = await prisma.user.create({
      data,
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    });
    return user;
  } catch (error) {
    console.error('Error creating user:', error instanceof Error ? error.message : String(error));
    throw new Error('Failed to create user');
  }
} 