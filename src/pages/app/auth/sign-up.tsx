import useEmailAuth from "$hooks/use-email-auth"
import { FormEventHandler, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import AuthLayout from "$layouts/auth-layout"
import useGithubAuth from "$hooks/use-github-auth"
import SocialLogin from "$components/social-login"
import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"

const Login = () => {
  const githubAuth = useGithubAuth()

  return (
    <AuthLayout title={"Sign up"}>
      <div>
        <Link href={"/"}>
          <a>
            <Image
              src="/favicon.ico"
              className="h-12 w-auto"
              width={72}
              height={72}
              alt="Leonidas"
            />
          </a>
        </Link>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Sign up for a new account
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Or{" "}
          <Link href="/app/auth/login">
            <a className="font-medium text-indigo-600 hover:text-indigo-500">
              log in here.
            </a>
          </Link>
        </p>
      </div>

      <div className="mt-8">
        <div>
          <div>
            <p className="text-sm font-medium text-gray-700">Sign up with</p>

            <div className="mt-1 grid grid-cols-3 gap-3">
              <SocialLogin
                label={"Login in with Facebook"}
                logoUrl="/brand-icons/facebook.svg"
              />

              <SocialLogin
                label={"Login in with Twitter"}
                logoUrl="/brand-icons/twitter.svg"
              />

              <SocialLogin
                label={"Login in with Github"}
                logoUrl="/brand-icons/github.svg"
                onClick={githubAuth.login}
              />
            </div>
          </div>

          <div className="relative mt-6">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
        </div>

        <SignInForm />
      </div>
    </AuthLayout>
  )
}

const SignInForm = () => {
  const [email, setEmail] = useState("")
  const { loading, login } = useEmailAuth()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await login(email)
  }

  return (
    <div className="mt-6">
      <form
        action="#"
        method="POST"
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={loading}
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })
  if (session) {
    return {
      redirect: {
        destination: "/app/home",
      },
      props: {},
    }
  }

  return { props: {} }
}

export default Login
