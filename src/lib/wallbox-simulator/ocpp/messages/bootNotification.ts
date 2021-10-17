import type { BootNotificationRequestType } from "../types/bootNotificationRequestType";
import { OcppCallMessageBuilder } from "./ocppMessage";

/**
 * ### 1.2. BootNotification
 *
 * Sent by the wallbox to the CSMS after booting.
 */
export const BootNotification =
  OcppCallMessageBuilder<BootNotificationRequestType>("BootNotification");

export const defaultBootNotificationPayload: BootNotificationRequestType = {
  chargingStation: {
    serialNumber: "SOME-serial-NUMBER-123",
    model: "MGWB Fake",
    vendorName: "Unicorn GmbH",
    firmwareVersion: "1.2.3",
  },
  reason: "PowerUp",
};
