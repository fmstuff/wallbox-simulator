import type { BootReasonEnumType } from "./bootReasonEnumType";
import type { ChargingStationType } from "./chargingStationType";

/**
 * ### 1.2.1. BootNotificationRequest
 *
 * This contains the field definition of the BootNotificationRequest PDU sent by
 * the Charging Station to the CSMS.
 */
export type BootNotificationRequestType = {
  reason: BootReasonEnumType;
  chargingStation: ChargingStationType;
};
