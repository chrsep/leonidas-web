import { NextMiddleware } from "next/server"
import { getSession } from "next-auth/react"

export const middleware: NextMiddleware = async (req) => {
  const sessionCookie = req.cookies["next-auth.session-token"]

  if (!sessionCookie) {
    return new Response("", {
      status: 302,
      headers: {
        location: "/auth/login",
      },
    })
  }
}