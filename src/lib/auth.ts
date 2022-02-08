import bcrypt from "bcryptjs"

const saltRounds = 10

export const validatePassword = (password, hashPassword) =>
  bcrypt.compare(password, hashPassword)

export const hashPassword = (password) => bcrypt.hash(password, saltRounds)
