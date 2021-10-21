/**
 * ### 2.43. IdTokenEnumType
 * _Enumeration_
 *
 * Allowable values of the IdTokenType field.
 *
 * IdTokenEnumType is used by: Common:GroupIdTokenType , Common:IdTokenType
 */
export type IdTokenEnumType = typeof idTokenTypes[number];

export const idTokenTypes = [
  "Central", // A centrally, in the CSMS (or other server) generated id (for example used for a remotely started transaction that is activated by SMS). No format defined, might be a UUID.
  "eMAID", // Electro-mobility account id as defined in ISO 15118
  "ISO14443", // ISO 14443 UID of RFID card. It is represented as an array of 4 or 7 bytes in hexadecimal representation.
  "KeyCode", // User use a private key-code to authorize a charging transaction. For example: Pin-code.
  "Local", // A locally generated id (e.g. internal id created by the Charging Station). No format defined, might be a UUID
  "NoAuthorization", // Transaction is started and no authorization possible. Charging Station only has a start button or mechanical key etc. IdToken field SHALL be left empty.
  "ISO15693", // ISO 15693 UID of RFID card. It is represented as an array of 8 bytes in hexadecimal representation.
] as const;
