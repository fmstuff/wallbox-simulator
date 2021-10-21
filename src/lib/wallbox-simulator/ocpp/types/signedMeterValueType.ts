import type { EncodingMethodEnumType } from "./encodingMethodEnumType";
import type { SignatureMethodEnumType } from "./signatureMethodEnumType";

/**
 * ### 1.50. SignedMeterValueType
 * _Class_
 *
 * Represent a signed version of the meter value.
 *
 * SignedMeterValueType is used by: Common:SampledValueType
 */
export type SignedMeterValueType = {
  /**
   * Required. Digital signature of the meter value.
   *
   * max-length: 2500
   */
  meterValueSignature: string;

  /**
   * Required. Method used to create the digital signature.
   */
  signatureMethod: SignatureMethodEnumType;

  /**
   * Required. Method used to encode the meter values before applying the digital signature
   * algorithm.
   */
  encodingMethod: EncodingMethodEnumType;

  /**
   * Required. Meter values as they were encoded before applying the digital signature algorithm.
   *
   * max-length: 512
   */
  encodedMeterValue: string;
};
