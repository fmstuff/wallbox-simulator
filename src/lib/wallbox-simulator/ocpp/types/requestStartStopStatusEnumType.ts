/**
 * ### 2.68. RequestStartStopStatusEnumType
 * _Enumeration_
 *
 * The result of a RequestStartTransactionRequest or
 * RequestStopTransactionRequest.
 *
 * RequestStartStopStatusEnumType is used by:
 * - `requestStartTransaction:RequestStartTransactionResponse`
 * - `requestStopTransaction:RequestStopTransactionResponse`
 */
export type RequestStartStopStatusEnumType =
  typeof requestStartStopResponses[number];

const requestStartStopResponses = [
  "Accepted", // Command will be executed.
  "Rejected", // Command will not be executed.
] as const;
