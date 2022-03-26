import { OcppCallResultMessageBuilder } from "./ocppMessage";
import type { GetVariablesResponseType } from "../types/getVariablesResponseType";

/**
 * ### 1.28 GetVariablesResponse
 *
 * Sent by the wallbox to the CSMS as a response to a GetVariablesRequest.
 */
export const sendGetVariablesResponse =
  OcppCallResultMessageBuilder<GetVariablesResponseType>();
