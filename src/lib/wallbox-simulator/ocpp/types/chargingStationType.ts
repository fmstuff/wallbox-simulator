/**
 * ### 1.13. ChargingStationType
 * _Class_
 *
 * The physical system where an Electrical Vehicle (EV) can be charged.
 * ChargingStationType is used by: _BootNotificationRequest_
 */
export type ChargingStationType = {
  serialNumber?: string; // string[0..20] 0..1 Optional. Vendor-specific device identifier.
  model: string; // string[0..20] 1..1 Required. Defines the model of the device.
  vendorName: string; // string[0..50] 1..1 Required. Identifies the vendor (not necessarily in a unique manner).
  firmwareVersion?: string; // string[0..50] 0..1 Optional. This contains the firmware version of the Charging Station.
  modem?: any; // ModemType 0..1 Optional. Defines the functional
};
