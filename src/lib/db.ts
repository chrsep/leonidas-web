import { PrismaClient } from "@prisma/client"

export const prisma = new PrismaClient()

export const findSession = async (id: string) => {
  return prisma.session.findUnique({
    where: {
      id,
    },
  })
}
