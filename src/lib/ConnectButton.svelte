<script lang="ts">
  export let connectionUrl: string = 'not provided';

  let connectionState: 'disconnected' | 'connecting' | 'connected' | 'error' = 'disconnected';
  let buttonText: string;

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
      alert(`Connecting to: ${connectionUrl}`)
    } else if (connectionState === 'connecting') {
      connectionState = 'connected';
    } else {
      connectionState = 'disconnected';
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
