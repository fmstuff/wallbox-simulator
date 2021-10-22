/**
 * ### 2.47. MeasurandEnumType
 * _Enumeration_
 *
 * Allowable values of the optional "measurand" field of a Value element, as used in
 * MeterValuesRequest and TransactionEventRequest with eventTypes Started, Ended and Updated.
 *
 * Default value of "measurand" is always "Energy.Active.Import.Register".
 *
 * MeasurandEnumType is used by: Common:SampledValueType
 */
export type MeasurandEnumType = typeof measurands[number];

export const measurands = [
  "Current.Export", // Instantaneous current flow from EV
  "Current.Import", // Instantaneous current flow to EV
  "Current.Offered", // Maximum current offered to EV
  "Energy.Active.Export.Register", // Numerical value read from the "active electrical energy" (Wh or kWh) register of the (most authoritative) electrical meter measuring energy exported (to the grid).
  "Energy.Active.Import.Register", // Numerical value read from the "active electrical energy" (Wh or kWh) register of the (most authoritative) electrical meter measuring energy imported (from the grid supply).
  "Energy.Reactive.Export.Register", // Numerical value read from the "reactive electrical energy" (varh or kvarh) register of the (most authoritative) electrical meter measuring energy exported (to the grid).
  "Energy.Reactive.Import.Register", // Numerical value read from the "reactive electrical energy" (varh or kvarh) register of the (most authoritative) electrical meter measuring energy imported (from the grid supply).
  "Energy.Active.Export.Interval", // Absolute amount of "active electrical energy" (Wh or kWh) exported (to the grid) during an associated time "interval", specified by a Metervalues ReadingContext, and applicable interval duration configuration values (in seconds) for ClockAlignedDataInterval and TxnMeterValueSampleInterval.
  "Energy.Active.Import.Interval", // Absolute amount of "active electrical energy" (Wh or kWh) imported (from the grid supply) during an associated time "interval", specified by a Metervalues ReadingContext, and applicable interval duration configuration values (in seconds) for ClockAlignedDataInterval and TxnMeterValueSampleInterval.
  "Energy.Active.Net", // Numerical value read from the “net active electrical energy" (Wh or kWh) register.
  "Energy.Reactive.Export.Interval", // Absolute amount of "reactive electrical energy" (varh or kvarh) exported (to the grid) during an associated time "interval", specified by a Metervalues ReadingContext, and applicable interval duration configuration values (in seconds) for ClockAlignedDataInterval and TxnMeterValueSampleInterval.
] as const;
