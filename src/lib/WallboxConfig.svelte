<script lang="ts">
  import Input from './components/Input.svelte';

  export let connectionUrl = localStorage.getItem('connectionString') ?? 'wss://connection/string...'
  
  $: {
    // save the connection string to local storage whenever it changes
    // to make it "survive" page refreshs
    localStorage.setItem('connectionString', connectionUrl);
  }
</script>

<Input bind:value={connectionUrl} />

<style></style>
