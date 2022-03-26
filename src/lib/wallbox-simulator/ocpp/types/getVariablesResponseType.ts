import type { GetVariableResultType } from "./getVariableResultType";

/**
 * ### 1.28.2. GetVariablesResponse
 *
 * This contains the field definition of the GetVariablesResponse PDU sent by
 * the CSMS to the Charging Station in response to GetVariablesRequest.
 */
export type GetVariablesResponseType = {
  /**
   * Required. List of requested variables and their values.
   */
  getVariableResult: GetVariableResultType[];
};
