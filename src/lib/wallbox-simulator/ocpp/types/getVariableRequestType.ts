import type { GetVariableDataType } from "./getVariableDataType";

/**
 * ### 1.28.1. GetVariablesRequest
 * _Class_
 *
 * This contains the field definition of the GetVariablesRequest PDU sent by the
 * CSMS to the Charging Station.
 */
export type GetVariablesRequest = {
  /**
   * Required. List of requested variables.
   */
  getVariableData: GetVariableDataType[];
};
