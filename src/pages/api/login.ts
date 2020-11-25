import { NextApiHandler } from "next"
import auth0 from "../../auth0"
import logger from "../../logger"

const login: NextApiHandler = async (req, res) => {
  try {
    const session = await auth0.getSession(req)
    if (session) {
      res.setHeader("Location", "/")
      res.status(302).end()
      return
    }
    await auth0.handleLogin(req, res)
  } catch (error) {
    logger.error(error)
    res.status(error.status || 400).end(error.message)
  }
}

export default login
