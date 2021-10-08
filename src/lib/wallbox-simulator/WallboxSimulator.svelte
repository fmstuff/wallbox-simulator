<script lang="ts">
  import ConnectButton from './ConnectButton.svelte'
  import PluginCableButton from './PluginCableButton.svelte'

  export let webSocketUrl = 'wss://connection/string...'

  let webSocket: WebSocket;
  let connectionState;
</script>

<p>
  <ConnectButton 
    bind:connectionUrl={webSocketUrl} 
    bind:webSocket={webSocket} 
    bind:connectionState />
</p>

<p>
  <PluginCableButton bind:webSocket={webSocket} bind:connectionState/>
</p>
