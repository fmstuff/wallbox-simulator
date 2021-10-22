import type { SampledValueType } from "./sampledValueType";

/**
 * ### 1.33. MeterValueType
 * _Class_
 *
 * Collection of one or more sampled values in MeterValuesRequest and TransactionEvent. All sampled
 * values in a MeterValue are sampled at the same point in time.
 *
 * MeterValueType is used by: MeterValuesRequest , TransactionEventRequest
 */
export type MeterValueType = {
  /**
   * Required. Timestamp for measured value(s).
   */
  timestamp: string; // Date-Time

  /**
   * Required. One or more measured values
   */
  sampledValue: SampledValueType[];
};
