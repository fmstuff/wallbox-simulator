/**
 * ### 2.64. ReasonEnumType
 * _Enumeration_
 *
 * Reason for stopping a transaction.
 *
 * ReasonEnumType is used by: transactionEvent:TransactionEventRequest.TransactionType
 */
export type ReasonEnumType = typeof reasons[number];

export const reasons = [
  "DeAuthorized", // The transaction was stopped because of the authorization status in the response to a transactionEventRequest.
  "EmergencyStop", // Emergency stop button was used.
  "EnergyLimitReached", // EV charging session reached a locally enforced maximum energy transfer limit
  "EVDisconnected", // Disconnecting of cable, vehicle moved away from inductive charge unit.
  "GroundFault", // A GroundFault has occurred
  "ImmediateReset", // A Reset(Immediate) command was received.
  "Local", // Stopped locally on request of the EV Driver at the Charging Station. This is a regular termination of a transaction. Examples: presenting an IdToken tag, pressing a button to stop.
  "LocalOutOfCredit", // A local credit limit enforced through the Charging Station has been exceeded.
  "MasterPass", // The transaction was stopped using a token with a MasterPassGroupId.
  "Other", // Any other reason.
  "OvercurrentFault", // A larger than intended electric current has occurred
  "PowerLoss", // Complete loss of power.
  "PowerQuality", // Quality of power too low, e.g. voltage too low/high, phase imbalance, etc.
  "Reboot", // A locally initiated reset/reboot occurred. (for instance watchdog kicked in)
  "Remote", // Stopped remotely on request of the CSMS. This is a regular termination of a transaction. Examples: termination using a smartphone app, exceeding a (non local) prepaid credit.
  "SOCLimitReached", // Electric vehicle has reported reaching a locally enforced maximum battery State of Charge (SOC)
] as const;
