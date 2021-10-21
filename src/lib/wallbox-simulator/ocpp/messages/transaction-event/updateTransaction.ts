import type { ChargingStateEnumType } from "../../types/chargingStateEnumType";
import type { TransactionEventRequestType } from "../../types/transactionEventRequestType";
import type { TriggerReasonEnumType } from "../../types/triggerReasonEnumType";

export function UpdateTransactionEventPayload(
  transactionId,
  chargingState: ChargingStateEnumType,
  triggerReason: TriggerReasonEnumType = "ChargingStateChanged"
): TransactionEventRequestType {
  return {
    eventType: "Updated",
    timestamp: new Date().toISOString(),
    triggerReason,
    seqNo: 0,
    evse: {
      id: 1,
      connectorId: 1,
    },
    transactionData: {
      id: transactionId,
      chargingState,
    },
  };
}
