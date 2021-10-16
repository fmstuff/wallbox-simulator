<script lang="ts">
  import type { Writable } from "svelte/store";

  import Button from "../components/Button.svelte";
  import { chargingState, ConnectionState } from "./store";
  import { StartTransactionEventPayload } from "./ocpp/messages/transaction-event/startTransaction";
  import { StopTransactionEventPayload } from "./ocpp/messages/transaction-event/stopTransaction";
  import { TransactionEvent } from "./ocpp/messages/transaction-event/transactionEvent";

  export let webSocket: WebSocket;
  export let connectionState: Writable<ConnectionState>;

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
      const payload = StartTransactionEventPayload();
      TransactionEvent(webSocket, payload);
      $chargingState = payload.transactionData.chargingState;
      setCableState(true);
    } else if (cableState === 'pluggedIn') {
      const sessionId = sessionStorage.getItem("OcppTransactionId"); // todo: handle this with Svelte state
      console.log(`Stopping session with ID: ${sessionId}`)
      TransactionEvent(webSocket, StopTransactionEventPayload(sessionId));
      $chargingState = undefined;
      setCableState(false);
    }
  }
</script>

{#if $connectionState === 'connected'}
<Button on:click={plugCableInOrOut}>
  {buttonText}
</Button>
{/if}

<style></style>
