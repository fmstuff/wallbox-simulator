<script lang="ts">
  import { fade } from 'svelte/transition';

  import ConnectButton from './ConnectButton.svelte'
  import ConnectionState from './ConnectionState.svelte';
  import { connectionState } from './store';
  import ChargingState from './charging-state/ChargingState.svelte'
  import ChargingStateSelector from './charging-state/ChargingStateSelector.svelte'
  import PluginCableButton from './cable/PluginCableButton.svelte'
  import WallboxSettings from './WallboxSettings.svelte';

  export let webSocketUrl = 'wss://connection/string...'

</script>

<div class="text-center">

  <div class="max-w-sm m-auto">
    <WallboxSettings />
  </div>
  
  <div class="max-w-sm m-auto">
    <ConnectButton
      bind:connectionUrl={webSocketUrl} 
      connectionState={connectionState}
    />
  </div>

  {#if $connectionState === 'connected'}
  <div transition:fade class="flex flex-row gap-3 justify-center">
    <ConnectionState />
    <ChargingState />
  </div>
  {/if}

  <div class="max-w-sm m-auto">
    <PluginCableButton connectionState={connectionState}/>
  </div>

  <div class="m-auto">
    <ChargingStateSelector />
  </div>
</div>

<style></style>
