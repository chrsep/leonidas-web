import type { RequestHandler } from "@sveltejs/kit"
import { findUser } from "$lib/db"
import { validatePassword } from "$lib/auth"

export const post: RequestHandler = async ({ params }) => {
  const user = await findUser(params.email)

  if (!user) {
    return {
      status: 401,
      body: {
        error: "unauthorized",
      },
    }
  }

  const isValid = await validatePassword(params.password, user.password)
  if (!isValid) {
    return {
      status: 401,
      body: {
        error: "unauthorized",
      },
    }
  }

  return {
    status: 200,
    body: {
      message: "Success",
    },
  }
}
