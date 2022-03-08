import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

const useGithubAuth = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const login = async () => {
    setLoading(true)
    const result = await signIn("github", {
      callbackUrl: "/app/home",
      redirect: false,
    })
    if (result) {
      await router.push("/auth/verify-request")
    }
    setLoading(false)
  }

  return { loading, login }
}

export default useGithubAuth
