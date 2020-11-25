import { NextApiRequest, NextApiResponse } from "next"
import auth0 from "../../auth0"
import logger from "../../logger"

export default async function logout(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await auth0.handleLogout(req, res)
  } catch (error) {
    logger.error(error)
    res.status(error.status || 400).end(error.message)
  }
}
