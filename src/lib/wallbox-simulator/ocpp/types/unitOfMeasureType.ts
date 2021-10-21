/**
 * ### 1.52. UnitOfMeasureType
 * _Class_
 *
 * Represents a UnitOfMeasure with a multiplier
 *
 * UnitOfMeasureType is used by: Common:SampledValueType
 */
export type UnitOfMeasureType = {
  /**
   * Optional. Unit of the value. Default = "Wh" if the (default) measurand is an "Energy" type.
   * This field SHALL use a value from the list Standardized Units of Measurements in Part 2
   * Appendices. If an applicable unit is available in that list, otherwise a "custom" unit might be used.
   *
   * max-length: 20
   */
  unit?: string;

  /**
   * Optional. Multiplier, this value represents the exponent to base 10.
   *
   * I.e. multiplier 3 means 10 raised to the 3rd power. Default is 0.
   */
  multiplier?: number; // integer
};
