import type { LocationEnumType } from "./locationEnumType";
import type { MeasurandEnumType } from "./measurandEnumType";
import type { PhaseEnumType } from "./phaseEnumType";
import type { ReadingContextEnumType } from "./readingContextEnumType";
import type { SignedMeterValueType } from "./signedMeterValueType";
import type { UnitOfMeasureType } from "./unitOfMeasureType";

/**
 * ### 1.44. SampledValueType
 * _Class_
 *
 * Single sampled value in MeterValues. Each value can be accompanied by optional fields.
 * To save on mobile data usage, default values of all of the optional fields are such that.
 * The value without any additional fields will be interpreted, as a register reading of active
 * import energy in Wh (Watt-hour) units.
 *
 * SampledValueType is used by: Common:MeterValueType
 */
export type SampledValueType = {
  /**
   * Required. Indicates the measured value.
   */
  value: number;

  /**
   * Optional. Type of detail value: start, end or sample.
   *
   * Default = "Sample.Periodic"
   */
  context?: ReadingContextEnumType;

  /**
   * Optional. Type of measurement. Default = "Energy.Active.Import.Register
   */
  measurand?: MeasurandEnumType;

  /**
   * Optional. Indicates how the measured value is to be interpreted. For instance between L1 and
   * neutral (L1-N)
   *
   * Please note that not all values of phase are applicable to all Measurands.
   * When phase is absent, the measured value is interpreted as an overall value.
   */
  phase?: PhaseEnumType;

  /**
   * Optional. Indicates where the measured value has been sampled.
   */
  location?: LocationEnumType;

  /**
   * Optional. Contains the MeterValueSignature with sign/encoding method information.
   */
  signedMeterValue?: SignedMeterValueType;

  /**
   * Optional. Represents a UnitOfMeasure including a multiplier
   */
  unitOfMeasure?: UnitOfMeasureType;
};
