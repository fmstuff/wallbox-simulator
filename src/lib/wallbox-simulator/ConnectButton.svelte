<script lang="ts">
  import { connectStation, disconnectStation } from './websocket';

  export let connectionUrl: string = 'not provided';
  export let webSocket: WebSocket;

  let connectionState: 'disconnected' | 'connecting' | 'connected' | 'error' = 'disconnected';
  let buttonText: string;
  let errorMessage: string;

  const setConnectionState = (connected: boolean) => {
    connected ? connectionState = 'connected' : connectionState = 'disconnected';
  }

  const setErrorMessage = (message: string) => {
    errorMessage = message;
  }

  const addLogMessage = (message: string) =>  {
    console.log(message);
  }

  $: {
    switch (connectionState) {
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
    if (connectionState === 'disconnected') {
      connectionState = 'connecting';
      webSocket = connectStation(
        webSocket,
        connectionUrl,
        setConnectionState,
        setErrorMessage,
        addLogMessage
      );
    } else if (connectionState === 'connected') {
      webSocket = disconnectStation(webSocket, setConnectionState);
    }
  }
</script>


<button on:click={connect}>
  {buttonText}
</button>


<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #6633cc;
    background-color: #eee7f9;
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #6633cc;
  }

  button:active {
    background-color: #d2c3ef;
  }
</style>
