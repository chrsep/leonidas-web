import { FC } from "react"
import { TypeSafePage } from "next-type-safe-routes"
import NextLink, { LinkProps } from "next/link"

const Link: FC<LinkProps & { href: TypeSafePage }> = (props) => (
  <NextLink {...props} />
)

export default Link
