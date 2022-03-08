import { FC, ReactNode } from "react"

const SocialLogin: FC<{
  label: string
  logo: ReactNode
  onClick?: () => void
}> = ({ onClick, logo, label }) => (
  <div>
    <button
      onClick={onClick}
      className="inline-flex h-full w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
    >
      <span className="sr-only">{label}</span>
      {logo}
    </button>
  </div>
)

export default SocialLogin
