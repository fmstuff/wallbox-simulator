import { OcppCallMessageBuilder } from "./ocppMessage";

export const BootNotification =
  OcppCallMessageBuilder<BootNotificationPayload>("BootNotification");

export type BootNotificationPayload = {
  chargingStation: {
    serialNumber: string;
    model: string;
    vendorName: string;
    firmwareVersion: string;
  };
  reason: string;
};

export const defaultBootNotificationPayload: BootNotificationPayload = {
  chargingStation: {
    serialNumber: "SOME-serial-NUMBER-123",
    model: "MGWB Fake",
    vendorName: "Unicorn GmbH",
    firmwareVersion: "1.2.3",
  },
  reason: "PowerUp",
};
