import { FC } from "react"
import Head from "next/head"

const BaseLayout: FC<{
  title?: string
  description?: string
  className?: string
}> = ({ description, title, className, children }) => (
  <div className={className}>
    <Head>
      <title>{title && `${title} | `}Leonidas </title>
      <meta name="description" content={description} />
    </Head>
    {children}
  </div>
)

export default BaseLayout
