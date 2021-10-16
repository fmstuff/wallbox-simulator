<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<button on:click class="
  w-full
  my-4
  px-8 py-4
  text-indigo-600
  bg-purple-100
  active:bg-purple-200
  rounded-full
  outline-none
  focus:ring-2
  focus:ring-indigo-600
  active:ring-offset-2
  active:ring-4
  "
>
  <slot>Custom Button</slot>
</button>
