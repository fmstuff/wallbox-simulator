<script lang="ts">
  export let classes: string = "";
</script>

<button on:click class="
  btn btn-sm
  text-indigo-600
  bg-purple-100
  hover:bg-purple-300
  active:bg-purple-300
  rounded-full
  outline-none
  focus:ring-indigo-600
  active:ring-offset-2
  active:ring-4
  { classes }
  ">
  <slot>Custom Button</slot>
</button>
