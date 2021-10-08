import { ReadingContextEnumType } from "../meterValue";

export function StopTransactionEventPayload(
  transactionId,
  triggerReason = "EVCommunicationLost"
) {
  const lastMeterValueFromSessionStorage =
    sessionStorage.getItem("LastMeterValue");
  console.log(
    `Last meter value from session storage: ${lastMeterValueFromSessionStorage}`
  );

  const stopMeterValue = parseInt(lastMeterValueFromSessionStorage, 10) ?? 0;

  console.log(`Stop session meter value: ${stopMeterValue}`);

  return {
    eventType: "Ended",
    timestamp: new Date().toISOString(),
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
      stoppedReason: "EVDisconnected",
    },
    meterValue: [
      {
        timestamp: new Date().toISOString(),
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
      {
        timestamp: new Date().toISOString(),
        sampledValue: [
          {
            context: ReadingContextEnumType.TransactionEnd,
            unitOfMeasure: {
              unit: "Wh",
            },
            value: stopMeterValue,
          },
        ],
      },
    ],
  };
}
