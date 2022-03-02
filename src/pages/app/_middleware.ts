import { withAuth } from "next-auth/middleware"

export const middleware = withAuth({
  pages: {
    signIn: "/auth/login",
    verifyRequest: "/auth/verify-request",
    newUser: "/auth/sign-up",
  },
})
