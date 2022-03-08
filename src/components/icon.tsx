import { FC } from "react"

const Icon: FC<{
  src: string
  className?: string
  color?: string
}> = ({ src, className, color = "bg-black" }) => (
  <div
    role="img"
    aria-hidden="true"
    className={`h-5 w-5 ${color} ${className}`}
    style={{
      maskImage: `url(${src})`,
      // @ts-ignore
      "-webkit-mask-image": `url(${src})`,

      maskSize: "100%",
      "-webkit-mask-size": "100%",

      maskRepeat: "no-repeat",
      "-webkit-mask-repeat": "no-repeat",
    }}
  />
)

export default Icon
