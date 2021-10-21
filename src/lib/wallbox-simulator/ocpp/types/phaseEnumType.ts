/**
 * ### 2.61. PhaseEnumType
 * _Enumeration_
 *
 * Phase specifies how a measured value is to be interpreted. Please note that not all values of
 * Phase are applicable to all Measurands.
 *
 * PhaseEnumType is used by: Common:SampledValueType
 */
export type PhaseEnumType = typeof phases[number];

export const phases = [
  "L1", // Measured on L1
  "L2", // Measured on L2
  "L3", // Measured on L3
  "N", // Measured on Neutral
  "L1-N", // Measured on L1 with respect to Neutral conductor
  "L2-N", // Measured on L2 with respect to Neutral conductor
  "L3-N", // Measured on L3 with respect to Neutral conductor
  "L1-L2", // Measured between L1 and L2
  "L2-L3", // Measured between L2 and L3
  "L3-L1", // Measured between L3 and L1
] as const;
