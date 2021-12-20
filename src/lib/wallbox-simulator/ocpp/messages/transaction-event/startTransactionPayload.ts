import { get } from "svelte/store";

import {
  ocppTransactionId,
  transactionStartTime,
  wallboxMeterWh,
} from "../../../store";

import type { ChargingStateEnumType } from "../../types/chargingStateEnumType";
import type { TriggerReasonEnumType } from "../../types/triggerReasonEnumType";
import type { TransactionEventRequest } from "../../types/transactionEventRequest";
import type { IdTokenType } from "../../types/idTokenType";

/**
 * Builds the payload for an OCPP TransactionEventRequest of type "Started".
 *
 * @param config The configuration for the OCPP payload
 * @returns The OCPP payload for a TransactionEventRequest of ty "Started"
 */
export function TransactionEventStartedPayload(config: {
  ocppTransactionId: string;
  meterValueWh: number;
  startDateTime: Date;
  triggerReason: TriggerReasonEnumType;
  chargingState: ChargingStateEnumType;
  idToken?: IdTokenType;
}): TransactionEventRequest {
  return {
    eventType: "Started",
    timestamp: config.startDateTime.toISOString(),
    triggerReason: config.triggerReason,
    seqNo: 0,
    idToken: config.idToken ?? {
      idToken: "TAG1",
      type: "Central",
    },
    evse: {
      id: 1,
      connectorId: 1,
    },
    transactionData: {
      id: config.ocppTransactionId,
      remoteStartId: 0,
      chargingState: config.chargingState,
    },
    meterValue: [
      {
        timestamp: config.startDateTime.toISOString(),
        sampledValue: [
          {
            context: "Transaction.Begin",
            unitOfMeasure: {
              unit: "Wh",
            },
            value: config.meterValueWh,
          },
        ],
      },
    ],
  };
}

export function generateTransactionId() {
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
