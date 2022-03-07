import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"

const useEmailLogin = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const emailSignIn = async (email: string) => {
    setLoading(true)
    const result = await signIn("email", {
      email,
      callbackUrl: "/app/home",
    })
    if (result) {
      await router.push("/auth/verify-request")
    }
    setLoading(false)
  }

  return { loading, signIn: emailSignIn }
}

export default useEmailLogin
