import { get } from "svelte/store";
import { stopPeriodicMeterIncrement } from "./meterValueTrigger";
import { TransactionEventEndedPayload } from "./ocpp/messages/transaction-event/stopTransactionPayload";
import { sendTransactionEventRequest } from "./ocpp/messages/transaction-event/transactionEvent";
import {
  chargingState,
  ocppTransactionId,
  wallboxMeterWh,
  webSocket,
} from "./store";

export function stopCurrentChargingSession() {
  console.log(`Stopping session with ID: ${get(ocppTransactionId)}`);
  stopPeriodicMeterIncrement();
  sendTransactionEventRequest(
    get(webSocket),
    TransactionEventEndedPayload(get(ocppTransactionId), get(wallboxMeterWh))
  );
  ocppTransactionId.set(undefined);
  chargingState.set(undefined);
}
