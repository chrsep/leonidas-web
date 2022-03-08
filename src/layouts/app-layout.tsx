import { FC } from "react"
import BaseLayout from "$layouts/base-layout"
import clsx from "clsx"
import BottomNavigationBar from "$components/bottom-navigation-bar"

const AuthLayout: FC<{
  title?: string
  description?: string
  className?: string
}> = ({ description, title, className, children }) => (
  <BaseLayout
    title={title}
    description={description}
    className={clsx("relative", className)}
  >
    {children}
    <BottomNavigationBar />
  </BaseLayout>
)

export default AuthLayout
