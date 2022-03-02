import { NextMiddleware } from "next/server"

export const middleware: NextMiddleware = async (req) => {
  const sessionCookie = req.cookies["next-auth.session-token"]

  if (sessionCookie) {
    return new Response("", {
      status: 302,
      headers: {
        location: "/app",
      },
    })
  }
}
