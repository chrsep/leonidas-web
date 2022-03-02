import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "$lib/db"
import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT || "587", 10),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
})
