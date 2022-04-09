<script lang="ts">
  import type { Writable } from 'svelte/store';
  import { get } from 'svelte/store';
  
  import Button from '../components/Button.svelte';
  import { startHeartbeat, stopHeartbeat } from './heatbeatTrigger';
  import type { ConnectionState } from './store';
  import {webSocket } from './store';
  import { connectStation, disconnectStation } from './websocket';

  export let connectionUrl: string = 'not provided';
  export let connectionState: Writable<ConnectionState>;
    
  let buttonText: string;

  const setConnectionState = (connected: boolean) => {
    connected ? $connectionState = 'connected' : $connectionState = 'disconnected';
  }

  $: {
    switch ($connectionState) {
      case 'disconnected':
        buttonText = 'Connect';
        break;
      case 'connecting':
        buttonText = 'Connecting...';
        break;
      case 'connected':
        buttonText = 'Disconnect';
        break;
      default:
        buttonText = 'Error...'
    }
  }

  const connect = () => {
    if ($connectionState === 'disconnected') {
      $connectionState = 'connecting';
      webSocket.set(connectStation(
        get(webSocket),
        connectionUrl,
        setConnectionState,
      ));
      startHeartbeat(get(webSocket));
    } else if ($connectionState === 'connected') {
      disconnectStation(get(webSocket));
      setConnectionState(false);
      stopHeartbeat();
    }
  }
</script>

<Button on:click={connect}>
  {buttonText}
</Button>

<style></style>
