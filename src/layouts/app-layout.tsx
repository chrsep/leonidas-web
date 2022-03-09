import BaseLayout from "$layouts/base-layout"
import clsx from "clsx"
import BottomNavigationBar from "$components/bottom-navigation-bar"
import { LayoutComponent } from "$lib/next"

const AppLayout: LayoutComponent<{
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

AppLayout.getLayout = (props) => (page) => {
  return <AppLayout {...props}>{page}</AppLayout>
}

export default AppLayout
