<script lang="ts">
  import { get } from 'svelte/store';
  import { fade } from 'svelte/transition';

  import ButtonGroupButton from '../../components/ButtonGroupButton.svelte';
  import Heading3 from '../../components/Heading3.svelte';
  import { startPeriodicMeterIncrement, stopPeriodicMeterIncrement } from '../meterValueTrigger';
  import { sendTransactionEventRequest } from '../ocpp/messages/transaction-event/transactionEvent';
  import { TransactionEventUpdatePayload } from '../ocpp/messages/transaction-event/updateTransactionPayload';
  import { ChargingStateEnumType, chargingStates } from '../ocpp/types/chargingStateEnumType';
  import { chargingState, ocppTransactionId, wallboxMeterWh, wallboxPowerKWh, webSocket } from '../store';

  const changeChargingState = (newState: ChargingStateEnumType) => {
    const sessionId = get(ocppTransactionId);
    const updateTransactionPayload = TransactionEventUpdatePayload(sessionId, newState);

    sendTransactionEventRequest(get(webSocket), updateTransactionPayload);

    $chargingState = newState;

    if (newState === 'Charging') {
      startPeriodicMeterIncrement(wallboxMeterWh, get(wallboxPowerKWh));
    } else {
      stopPeriodicMeterIncrement();
    }
  }
</script>

{#if $chargingState !== undefined}
<div transition:fade>
  <Heading3>Charging State</Heading3>
  
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
