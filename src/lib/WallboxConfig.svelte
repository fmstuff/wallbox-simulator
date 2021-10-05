<script lang="ts">
  export let connectionUrl = 'wss://connection/string...'
</script>

<input id="url" bind:value={connectionUrl}>

<style>
  input {
    width: 50%;
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #6633cc;
    background-color: #eee7f9;
    border-radius: 2em;
    border: 2px solid #eee7f9;
    outline: none;
  }

  input:focus {
    border: 2px solid #6633cc;
  }
</style>