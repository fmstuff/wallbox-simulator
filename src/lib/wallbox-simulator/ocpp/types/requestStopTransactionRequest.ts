/**
 * ### 1.47.1. RequestStopTransactionRequest
 * _Class_
 *
 * This contains the field definitions of the RequestStopTransactionRequest PDU
 * sent to Charging Station by CSMS.
 */
export type RequestStopTransactionRequest = {
  /**
   * Required. The identifier of the transaction which the Charging Station is
   * requested to stop.
   */
  transactionId: string;
};
