/**
 * ### 2.17. ChargingStateEnumType
 * _Enumeration_
 *
 * Reason that triggered a transactionEventRequest(eventType=Updated) to be sent.
 * ChargingStateEnumType is used by: transactionEvent:TransactionEventRequest.TransactionType
 */
export type ChargingStateEnumType = typeof chargingStates[number];

export const chargingStates = [
  "Charging", // When the contactor of a Connector closes, allowing the vehicle to charge.
  "EVDetected", // EV is detected. Cable is plugged in and there is communication between EV and EVSE.
  "SuspendedEV", // When the EV is connected to the EVSE and the EVSE is offering energy but the EV is not taking any energy.
  "SuspendedEVSE", // When the EV is connected to the EVSE but the EVSE is not offering energy to the EV
] as const;
