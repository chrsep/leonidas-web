import { FC, ReactNode } from "react"

const SocialLogin: FC<{
  label: string
  onClick?: () => void
  logoUrl: string
}> = ({ onClick, logoUrl, label }) => (
  <div>
    <button
      onClick={onClick}
      className="inline-flex h-full w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
    >
      <span className="sr-only">{label}</span>
      <img src={logoUrl} alt="Facebook" className={"h-5 w-5 opacity-60"} />
    </button>
  </div>
)

export default SocialLogin
