<script lang="ts">
  export let label: string
  export let name: string
  export let type: string
  export let autocomplete: string
  export let required: boolean

  export let value: string = ""
</script>

<div>
  <label for={name} class="block text-sm font-medium text-gray-700">
    {label}
  </label>
  <div class="mt-1">
    <input
      id={name}
      {type}
      {name}
      {autocomplete}
      {required}
      {value}
      on:input={(e) => (value = e.target.value)}
      class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    />
  </div>
</div>
