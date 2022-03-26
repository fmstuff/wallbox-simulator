/**
 * ### 2.41. GetVariableStatusEnumType
 * _Enumeration_
 *
 * GetVariableStatusEnumType is used by:
 * - `getVariables:GetVariablesResponse.GetVariableResultType`
 */
export type GetVariableStatusEnumType = typeof getVariableStatuses[number];

const getVariableStatuses = [
  "Accepted", // Variable successfully set.
  "Rejected", // Request is rejected.
  "UnknownComponent", // Component is not known.
] as const;
