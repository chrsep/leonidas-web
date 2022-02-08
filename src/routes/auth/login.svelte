<script lang="ts">
  import TextField from "$components/text-field.svelte"

  let email: string
  let password: string
</script>

<div>
  <img
    class="mx-auto h-12 w-auto"
    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
    alt="Workflow"
  />
  <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
    Log in to your account
  </h2>
  <p class="mt-2 text-center text-sm text-gray-600">
    Don't have an account?
    <a
      href="/auth/signup"
      class="font-medium text-indigo-600 hover:text-indigo-500"
    >
      Sign up here.
    </a>
  </p>
</div>

<form class="mt-8 space-y-6" action="#" method="POST">
  <TextField
    label="Email address"
    name="email"
    required
    type="email"
    bind:value={email}
  />
  <TextField
    label="Password"
    name="password"
    required
    type="password"
    bind:value={password}
  />

  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <input
        id="remember-me"
        name="remember-me"
        type="checkbox"
        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
      />
      <label for="remember-me" class="ml-2 block text-sm text-gray-900">
        Remember me
      </label>
    </div>

    <div class="text-sm">
      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
        Forgot your password?
      </a>
    </div>
  </div>

  <div>
    <button
      type="submit"
      class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Log in
    </button>
  </div>
</form>
