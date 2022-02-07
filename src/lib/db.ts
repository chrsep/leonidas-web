import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const findUser = async (email: string) => {
  return await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
    },
  })
}
