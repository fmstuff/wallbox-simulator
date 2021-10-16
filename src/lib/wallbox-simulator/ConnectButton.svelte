<script lang="ts">
  import type { Writable } from 'svelte/store';
  
  import Button from '../components/Button.svelte';
  import type { ConnectionState } from './store';
  import { connectStation, disconnectStation } from './websocket';

  export let connectionUrl: string = 'not provided';
  export let webSocket: WebSocket;
  export let connectionState: Writable<ConnectionState>;
    
  let buttonText: string;
  let errorMessage: string;

  const setConnectionState = (connected: boolean) => {
    connected ? $connectionState = 'connected' : $connectionState = 'disconnected';
  }

  const setErrorMessage = (message: string) => {
    errorMessage = message;
  }

  const addLogMessage = (message: string) =>  {
    console.log(message);
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
      webSocket = connectStation(
        webSocket,
        connectionUrl,
        setConnectionState,
        setErrorMessage,
        addLogMessage
      );
    } else if ($connectionState === 'connected') {
      webSocket = disconnectStation(webSocket, setConnectionState);
    }
  }
</script>

<Button on:click={connect}>
  {buttonText}
</Button>

<style></style>
