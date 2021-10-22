/**
 * ### 2.31. EncodingMethodEnumType
 * _Enumeration_
 *
 * Enumeration of the method used to encode the meter value into binary data before applying the
 * digital signature algorithm.
 * If the EncodingMethod is set to Other, the CSMS MAY try to determine the encoding method from the
 * encodedMeterValue field.
 *
 * EncodingMethodEnumType is used by: Common:SignedMeterValueType
 */
export type EncodingMethodEnumType = typeof encodingMethods[number];

export const encodingMethods = [
  "Other", // Encoding method is not included in the enumeration.
  "DLMS Message", //  The data is encoded in adigitally signed DLMS message, as described in the DLMS Green Book 8.
  "COSEM Protected Data", // The data is encoded according to the COSEM data protection methods, as described in the DLMS Blue Book 12.
  "EDL", // The data is encoded in the format used by EDL meters.
] as const;
