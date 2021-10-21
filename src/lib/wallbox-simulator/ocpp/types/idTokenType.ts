import type { AdditionalInfoType } from "./additionalInfoType";
import type { IdTokenEnumType } from "./idTokenEnumType";

/**
 * ### 1.29. IdTokenType
 * _Class_
 *
 * Contains a case insensitive identifier to use for the authorization and the type of authorization
 * to support multiple forms of identifiers.
 *
 * IdTokenType is used by: Common:AuthorizationData, RequestStartTransactionRequest,
 * AuthorizeRequest, TransactionEventRequest, ReserveNowRequest, CustomerInformationRequest
 */
export type IdTokenType = {
  /**
   * Required. IdToken is case insensitive. Might hold the hidden id of an RFID tag, but can for
   * example also contain a UUID.
   */
  idToken: string;

  /**
   * Required. Enumeration of possible idToken types.
   */
  type: IdTokenEnumType;

  /**
   * Optional. AdditionalInfo can be used to send extra information which can be validated by the
   * CSMS in addition to the regular authorization with IdToken.
   *
   * AdditionalInfo contains one or more custom types, which need to be agreed upon by all parties
   * involved. When AdditionalInfo is NOT implemented or a not supported AdditionalInfo.type is
   * used, the CSMS/Charging Station MAY ignore the AdditionalInfo.
   */
  additionalInfo?: AdditionalInfoType[];
};
