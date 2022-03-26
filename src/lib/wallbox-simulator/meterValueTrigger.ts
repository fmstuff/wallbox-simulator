import type { Writable } from "svelte/store";
import { get } from "svelte/store";
import { sendTransactionEventRequest } from "./ocpp/messages/transaction-event/transactionEvent";
import { TransactionEventUpdatePayload } from "./ocpp/messages/transaction-event/updateTransactionPayload";
import { chargingState, ocppTransactionId, webSocket } from "./store";

let meterIncrementIntervalReference: ReturnType<typeof setTimeout>;
let meterValueOcppMessageIntervalReference: ReturnType<typeof setTimeout>;

export function startPeriodicMeterIncrement(
  meterValueStoreWh: Writable<number>,
  powerKWh: number
) {
  let wattsPerSecond = (powerKWh * 1000) / 3600;
  wattsPerSecond = Math.round(wattsPerSecond * 100) / 100;

  meterIncrementIntervalReference = setInterval(() => {
    meterValueStoreWh.update((n) => addWatts(n, wattsPerSecond));
  }, 1000);

  meterValueOcppMessageIntervalReference = setInterval(() => {
    const updateTransactionPayload = periodicMeterValuePayload(
      get(meterValueStoreWh)
    );
    sendTransactionEventRequest(get(webSocket), updateTransactionPayload);
  }, 10000);
}

export function stopPeriodicMeterIncrement() {
  clearInterval(meterIncrementIntervalReference);
  clearInterval(meterValueOcppMessageIntervalReference);
}

function addWatts(initialValue: number, increment: number) {
  return Math.round((initialValue + increment) * 100) / 100;
}

function periodicMeterValuePayload(meterValueWh: number) {
  return TransactionEventUpdatePayload(
    get(ocppTransactionId),
    get(chargingState),
    "MeterValuePeriodic",
    [
      {
        timestamp: new Date().toISOString(),
        sampledValue: [
          {
            value: meterValueWh,
            context: "Sample.Periodic",
            unitOfMeasure: {
              unit: "Wh",
              multiplier: 0,
            },
          },
        ],
      },
    ]
  );
}
