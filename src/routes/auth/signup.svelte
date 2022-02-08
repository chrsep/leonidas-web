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
    Sign up for an account
  </h2>
  <p class="mt-2 text-center text-sm text-gray-600">
    Already have an account?
    <a
      href="/auth/login"
      class="font-medium text-indigo-600 hover:text-indigo-500"
    >
      Log in.
    </a>
  </p>
</div>

<form class="mt-8 space-y-6" action="#" method="POST">
  <TextField
    label="Email"
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

  <TextField label="Username" name="username" required bind:value={password} />

  <div>
    <button
      type="submit"
      class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      Sign up
    </button>
  </div>
</form>
