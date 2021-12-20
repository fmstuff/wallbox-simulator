import type { AttributeEnumType } from "./attributeEnumType";
import type { ComponentType } from "./componentType";
import type { GetVariableStatusEnumType } from "./getVariableStatusEnumType";
import type { VariableType } from "./variableType";

/**
 * ### 1.26. GetVariableResultType
 * _Class_
 *
 * Class to hold results of GetVariables request. GetVariableResultType is used
 * by: GetVariablesResponse
 */
export type GetVariableResultType = {
  /**
   * Required. Result status of getting the variable.
   */
  attributeStatus: GetVariableStatusEnumType;

  /**
   * Optional. Attribute type for which value is requested.
   * When absent, default Actual is assumed.
   */
  attributeType?: AttributeEnumType;

  /**
   * Optional. Value of requested attribute type of component-variable.
   * This field can only be empty when the given status is NOT accepted.
   */
  attributeValue?: string;

  /**
   * Required. Component for which the Variable is requested.
   */
  component: ComponentType;

  /**
   * Required. Variable for which the attribute value is requested.
   */
  variable: VariableType;
};
