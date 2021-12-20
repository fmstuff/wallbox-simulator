import type { RequestStopTransactionResponse } from "../types/requestStopTransactionResponse";
import { OcppCallResultMessageBuilder } from "./ocppMessage";

/**
 * ### 1.47.2. RequestStopTransactionResponse
 *
 * Sent by the wallbox in response to a remote RequestStopTransactionRequest.
 */
export const sendRequestStopTransactionResponse =
  OcppCallResultMessageBuilder<RequestStopTransactionResponse>();
