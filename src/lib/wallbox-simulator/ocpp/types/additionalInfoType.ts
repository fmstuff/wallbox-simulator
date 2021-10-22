/**
 * ### 1.2. AdditionalInfoType
 * _Class_
 *
 * Contains a case insensitive identifier to use for the authorization and the type of authorization
 * to support multiple forms of identifiers.
 *
 * AdditionalInfoType is used by: Common:IdTokenType
 */
export type AdditionalInfoType = {
  /**
   * Required. This field specifies the additional IdToken.
   *
   * * max-length: 36
   */
  additionalIdToken: string;

  /**
   * Required. This defines the type of the additionalIdToken. This is a custom type, so the
   * implementation needs to be agreed upon by all involved parties.
   *
   * max-length: 50
   */
  type: string;
};
