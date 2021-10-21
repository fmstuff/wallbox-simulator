/**
 * ### 2.44. LocationEnumType
 * _Enumeration_
 *
 * Allowable values of the optional "location" field of a value element.
 *
 * LocationEnumType is used by: Common:SampledValueType
 */
export type LocationEnumType = typeof locations[number];

export const locations = [
  "Body", // Measurement inside body of Charging Station (e.g. Temperature).
  "Cable", // Measurement taken from cable between EV and Charging Station.
  "EV", // Measurement taken by EV.
  "Inlet", // Measurement at network ("grid") inlet connection.
  "Outlet", // Measurement at a Connector. Default value.
] as const;
