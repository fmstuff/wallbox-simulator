/**
 * ### 2.3. AttributeEnumType
 * _Enumeration_
 *
 * AttributeEnumType is used by:
 * - `Common:VariableAttributeType`
 * - `getVariables:GetVariablesRequest.GetVariableDataType`
 * - `getVariables:GetVariablesResponse.GetVariableResultType`
 * - `setVariables:SetVariablesRequest.SetVariableDataType`
 * - `setVariables:SetVariablesResponse.SetVariableResultType`
 */
export type AttributeEnumType = typeof attributes[number];

export const attributes = [
  "Actual", // The actual value of the variable.
  "Target", // The target value for this variable.
  "MinSet", // The minimal allowed value for this variable
  "MaxSet", // Thne maximum allowed value for this variable
] as const;
