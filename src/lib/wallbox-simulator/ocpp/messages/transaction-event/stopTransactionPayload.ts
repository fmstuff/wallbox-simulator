import type { TriggerReasonEnumType } from "../../types/triggerReasonEnumType";
import type { TransactionEventRequest } from "../../types/transactionEventRequest";

/**
 * Builds the payload for an OCPP TransactionEventRequest of type "Ended".
 *
 * @param transactionId The OCPP transaction ID
 * @param stopMeterValueWh The meter value for the end of the charging session
 * @param triggerReason The reason that triggered this event (default: `EVCommunicationLost`)
 * @returns The OCPP payload for a TransactionEventRequest of ty "Ended"
 */
export function TransactionEventEndedPayload(
  transactionId: string,
  stopMeterValueWh: number,
  triggerReason: TriggerReasonEnumType = "EVCommunicationLost"
): TransactionEventRequest {
  return {
    eventType: "Ended",
    timestamp: new Date().toISOString(),
    triggerReason,
    seqNo: 0,
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
            context: "Transaction.Begin",
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
            context: "Transaction.End",
            unitOfMeasure: {
              unit: "Wh",
            },
            value: stopMeterValueWh,
          },
        ],
      },
    ],
  };
}
