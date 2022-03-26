import type { EVSEType } from "./evseType";
import type { IdTokenType } from "./idTokenType";
import type { MeterValueType } from "./meterValueType";
import type { TransactionEventEnumType } from "./transactionEventEnumType";
import type { TransactionType } from "./transactionType";
import type { TriggerReasonEnumType } from "./triggerReasonEnumType";

/**
 * ### 1.62.1. TransactionEventRequest
 * This contains the field definition of the TransactionEventRequest PDU sent by the Charging
 * Station to the CSMS.
 */
export type TransactionEventRequest = {
  /**
   * Required. This contains the type of this event. The first TransactionEvent of a transaction
   * SHALL contain: "Started".
   * The last TransactionEvent of a transaction SHALL contain: "Ended".
   * All others SHALL contain: "Updated"
   */
  eventType: TransactionEventEnumType;

  /**
   * Required. The date and time at which this transaction event occurred.
   */
  timestamp: string; // Date-Time

  /**
   * Required. Reason the Charging Station sends this message to the CSMS
   */
  triggerReason: TriggerReasonEnumType;

  /**
   * Required. Incremental sequence number (INTEGER), helps with determining if all messages of a
   * transaction have been received.
   */
  seqNo: number; // integer

  /**
   * Required. Contains transaction specific data.
   */
  transactionData: TransactionType;

  /**
   * Optional. This contains the identifier for which a transaction has to be/was started.
   * Is required when the EV Driver becomes authorized for this transaction. The IdToken should only
   * be send once in a TransactionEventRequest for every authorization done for this transaction.
   */
  idToken?: IdTokenType;

  /**
   * Optional. This identifies which evse (and connector) of the Charging Station is used.
   */
  evse?: EVSEType;

  /**
   * Optional. This contains the relevant meter values.
   *
   * Depending on the EventType of this TransactionEvent the following Configuration Variable is
   * used to configure the content:
   * - Started: TxnStartedSampledData,
   * - Updated: TxnUpdatedSampledData & MeterValuesAlignedData.
   * - Ended: TxnEndedSampledData & TxnEndedAlignedData.
   */
  meterValue?: MeterValueType[];

  /**
   * Optional. Indication that this transaction event happened when the Charging Station was
   * offline.
   *
   * Default = false, meaning: the event occurred when the Charging Station was online.
   */
  offline?: boolean;

  /**
   * Optional. The actual number of phases, a connected EV uses to draw power. When omitted, the
   * currently used number of phases can be determined by the CSMS according to (lower number have
   * priority):
   * 1: The last numberPhasesUsed sent.
   * 2: The numberPhases in the currently used ChargingSchedule.
   * 3: The number of phases provided via device management.
   * 4: Assume 3 phases as the last fallback.
   */
  numberOfPhasesUsed?: number; // integer

  /**
   * Optional. The maximum current of the connected cable in Ampere (A).
   */
  cableMaxCurrent?: number;

  /**
   * Optional. This contains the Id of the reservation that terminates as a result of this
   * transaction.
   */
  reservationId?: number; // integer
};
