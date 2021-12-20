<script lang="ts">
  import { get, Writable } from "svelte/store";

  import Button from "../../components/Button.svelte";
  import { chargingState, ConnectionState, ocppTransactionId, transactionStartTime, wallboxAuthMode, wallboxMeterWh, webSocket } from "../store";
  import { TransactionEventUpdatePayload } from "../ocpp/messages/transaction-event/updateTransactionPayload";
  import { stopCurrentChargingSession } from "../chargingSessionHandling";
  import { sendTransactionEventRequest } from "../ocpp/messages/transaction-event/transactionEvent";
  import { generateTransactionId, TransactionEventStartedPayload } from "../ocpp/messages/transaction-event/startTransactionPayload";

  export let connectionState: Writable<ConnectionState>;

  let cableState: 'pluggedOut' | 'pluggedIn' = 'pluggedOut';
  let buttonText: string;

  const setPluggedIn = (isPluggedIn: boolean) => {
    isPluggedIn ? cableState = 'pluggedIn' : cableState = 'pluggedOut';
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
      const startDateTime = new Date();
      const transactionId = generateTransactionId();
      const payload = TransactionEventStartedPayload({
        ocppTransactionId: transactionId,
        meterValueWh: get(wallboxMeterWh),
        startDateTime,
        triggerReason: 'CablePluggedIn',
        chargingState: 'EVDetected'
      });
      transactionStartTime.set(startDateTime);
      ocppTransactionId.set(transactionId);
      sendTransactionEventRequest(get(webSocket), payload);
      $chargingState = payload.transactionData.chargingState;
      setPluggedIn(true);

      if (get(wallboxAuthMode) === 'instant') {
        // if instant charging is endabled, immediately authorize the session:
        const sessionId = get(ocppTransactionId);
        const updateTransactionPayload = TransactionEventUpdatePayload(sessionId, get(chargingState), 'Authorized');
        sendTransactionEventRequest(get(webSocket), updateTransactionPayload);
      }
    } else if (cableState === 'pluggedIn') {
      if (get(ocppTransactionId)) {
        stopCurrentChargingSession();
      }
      setPluggedIn(false);
    }
  }
</script>

{#if $connectionState === 'connected'}
<Button on:click={plugCableInOrOut}>
  {buttonText}
</Button>
{/if}

<style></style>
