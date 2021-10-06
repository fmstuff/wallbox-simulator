<script lang="ts">
  import ConnectButton from './ConnectButton.svelte'

  export let webSocketUrl = 'wss://connection/string...'
  let webSocket: WebSocket;
</script>

<p>
  <ConnectButton bind:connectionUrl={webSocketUrl} bind:webSocket={webSocket}/>
</p>
