import type { ChargingStateEnumType } from "./chargingStateEnumType";
import type { ReasonEnumType } from "./reasonEnumType";

/**
 * ### 1.51. TransactionType
 * _Class_
 *
 * TransactionType is used by: TransactionEventRequest
 */
export type TransactionType = {
  /**
   * Required. This contains the Id of the transaction.
   */
  id: string;

  /**
   * Optional. Current charging state, is required when state has changed.
   * Omitted when there is no communication between EVSE and EV, because no cable is plugged in.
   */
  chargingState?: ChargingStateEnumType;

  /**
   * Optional. Contains the total time that energy flowed from EVSE to EV during the transaction
   * (in seconds).
   *
   * Note that timeSpentCharging is smaller or equal to the duration of the transaction.
   */
  timeSpentCharging?: number; // integer

  /**
   * Optional. This contains the reason why the transaction was stopped.
   *
   * MAY only be omitted when Reason is "Local".
   */
  stoppedReason?: ReasonEnumType;

  /**
   * Optional. The ID given to remote start request (RequestStartTransactionRequest.
   * This enables to CSMS to match the started transaction to the given start request.
   */
  remoteStartId?: number; // integer
};
