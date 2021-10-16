import type { ChargingStateEnumType } from "../../types/chargingStateEnumType";
import type { TriggerReasonEnumType } from "../../types/triggerReasonEnumType";
import { ReadingContextEnumType } from "../meterValue";

export function StartTransactionEventPayload(
  triggerReason: TriggerReasonEnumType = "CablePluggedIn",
  chargingState: ChargingStateEnumType = "EVDetected"
) {
  const transactionStartTime = new Date().toISOString();
  sessionStorage.setItem("TransactionStartTime", transactionStartTime);
  sessionStorage.setItem("LastMeterValue", "0");

  const transactionId = generateTransactionId();
  sessionStorage.setItem("OcppTransactionId", transactionId);
  console.log(
    `Transaction ID stored to local session storage: ${sessionStorage.getItem(
      "OcppTransactionId"
    )}`
  );

  return {
    eventType: "Started",
    timestamp: transactionStartTime,
    triggerReason,
    seqNo: 0,
    idToken: {
      idToken: "TAG1",
      type: "Central",
    },
    evse: {
      id: 1,
      connectorId: 1,
    },
    transactionData: {
      id: transactionId,
      remoteStartId: 0,
      chargingState: chargingState,
    },
    meterValue: [
      {
        timestamp: transactionStartTime,
        sampledValue: [
          {
            context: ReadingContextEnumType.TransactionBegin,
            unitOfMeasure: {
              unit: "Wh",
            },
            value: 0,
          },
        ],
      },
    ],
  };
}

function generateTransactionId() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}
