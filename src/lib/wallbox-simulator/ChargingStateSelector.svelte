<script lang="ts">
  import { fade } from 'svelte/transition';

  import ButtonGroupButton from '../components/ButtonGroupButton.svelte';
  import Heading3 from '../components/Heading3.svelte';
  import { TransactionEvent } from './ocpp/messages/transaction-event/transactionEvent';
  import { UpdateTransactionEventPayload } from './ocpp/messages/transaction-event/updateTransaction';
  import { ChargingStateEnumType, chargingStates } from './ocpp/types/chargingStateEnumType';
  import { chargingState } from './store';

  export let webSocket: WebSocket;

  const changeChargingState = (newState: ChargingStateEnumType) => {
    const sessionId = sessionStorage.getItem("OcppTransactionId"); // todo: handle this with Svelte state
    const updateTransactionPayload = UpdateTransactionEventPayload(sessionId, newState);
    console.log(`Updating session with ID: ${sessionId}`)
    TransactionEvent(webSocket, updateTransactionPayload);
    $chargingState = newState;
    }
</script>

{#if $chargingState !== undefined}
<div transition:fade>
  <Heading3>Charigng State</Heading3>
  
  <div class="flex flex-row justify-center">
    <div class="btn-group">
      {#each chargingStates as state, _i}
        <ButtonGroupButton on:click={() => changeChargingState(state)} classes="{state === $chargingState ? "btn-active" : ""}">
          { state }
        </ButtonGroupButton>
      {/each}
    </div> 
  </div>
</div>
{/if}

<style></style>
