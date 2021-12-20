import type { RequestStartStopStatusEnumType } from "./requestStartStopStatusEnumType";

/**
 * ### 1.47.2. RequestStopTransactionResponse
 * _Class_
 *
 * This contains the field definitions of the RequestStopTransactionResponse PDU
 * sent from Charging Station to CSMS.
 */
export type RequestStopTransactionResponse = {
  /**
   * Required. Status indicating whether Charging Station accepts the request to
   * stop a transaction.
   */
  status: RequestStartStopStatusEnumType;
};
