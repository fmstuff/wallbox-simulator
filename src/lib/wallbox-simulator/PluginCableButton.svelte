<script lang="ts">
  import { StartTransactionEventPayload } from "./ocpp-messages/transaction-event/startTransaction";
  import { StopTransactionEventPayload } from "./ocpp-messages/transaction-event/stopTransaction";
  import { TransactionEvent } from "./ocpp-messages/transaction-event/transactionEvent";

  export let webSocket: WebSocket;
  export let connectionState;

  let cableState: 'pluggedOut' | 'pluggedIn' = 'pluggedOut';
  let buttonText: string;

  const setCableState = (pluggedIn: boolean) => {
    pluggedIn ? cableState = 'pluggedIn' : cableState = 'pluggedOut';
  }

  $: {
    switch (cableState) {
      case 'pluggedOut':
        buttonText = 'Plug Cable In';
        break;
      case 'pluggedIn':
        buttonText = 'Plug Cable Out';
        break;
    }
  }

  const plugCableInOrOut = () => {
    if (cableState === 'pluggedOut') {
      TransactionEvent(webSocket, StartTransactionEventPayload());
      setCableState(true);
    } else if (cableState === 'pluggedIn') {
      const sessionId = sessionStorage.getItem("OcppTransactionId"); // todo: handle this with Svelte state
      console.log(`Stopping session with ID: ${sessionId}`)
      TransactionEvent(webSocket, StopTransactionEventPayload(sessionId));
      setCableState(false);
    }
  }
</script>

{#if connectionState === 'connected'}
<button on:click={plugCableInOrOut}>
  {buttonText}
</button>
{/if}


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
