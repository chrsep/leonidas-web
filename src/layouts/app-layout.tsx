import { FC, ReactElement } from "react"
import BaseLayout from "$layouts/base-layout"
import clsx from "clsx"
import BottomNavigationBar from "$components/bottom-navigation-bar"

const AppLayout: FC<{
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

export const createAppLayoutGetter =
  // eslint-disable-next-line react/display-name
  (className?: string) => (page: ReactElement) => {
    return <AppLayout className={className}>{page}</AppLayout>
  }

export default AppLayout
