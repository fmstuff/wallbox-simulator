import type { ChargingStateEnumType } from "../../types/chargingStateEnumType";
import type { MeterValueType } from "../../types/meterValueType";
import type { TransactionEventRequest } from "../../types/transactionEventRequest";
import type { TriggerReasonEnumType } from "../../types/triggerReasonEnumType";

/**
 * Builds the payload for an OCPP TransactionEventRequest of type "Updated".
 *
 * @param transactionId The OCPP transaction ID
 * @param chargingState The current charging state
 * @param triggerReason The reason that triggered this event
 * @param meterValue The current meter value of the wallbox
 * @returns The OCPP payload for a TransactionEventRequest of ty "Updated"
 */
export function TransactionEventUpdatePayload(
  transactionId,
  chargingState: ChargingStateEnumType,
  triggerReason: TriggerReasonEnumType = "ChargingStateChanged",
  meterValue?: MeterValueType[]
): TransactionEventRequest {
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
    meterValue,
  };
}
