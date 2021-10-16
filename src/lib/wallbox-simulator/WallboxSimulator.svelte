<script lang="ts">
  import { fade } from 'svelte/transition';

  import ConnectButton from './ConnectButton.svelte'
  import ConnectionState from './ConnectionState.svelte';
  import { connectionState } from './store';
  import ChargingState from './ChargingState.svelte'
  import PluginCableButton from './PluginCableButton.svelte'

  export let webSocketUrl = 'wss://connection/string...'

  const connectionStateStore = connectionState;
  let webSocket: WebSocket;
</script>

<div class="text-center">
  <div class="max-w-sm m-auto">
    <ConnectButton
      bind:connectionUrl={webSocketUrl} 
      bind:webSocket={webSocket}
      connectionState={connectionStateStore}
    />
  </div>

  {#if !(webSocket === undefined)}
  <div transition:fade class="flex flex-row gap-3 justify-center">
    <ConnectionState />
    <ChargingState />
  </div>
  {/if}

  <div class="max-w-sm m-auto">
    <PluginCableButton bind:webSocket={webSocket} connectionState={connectionStateStore}/>
  </div>
</div>

<style></style>
