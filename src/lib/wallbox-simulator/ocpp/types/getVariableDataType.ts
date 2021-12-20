import type { AttributeEnumType } from "./attributeEnumType";
import type { ComponentType } from "./componentType";
import type { VariableType } from "./variableType";

/**
 * ### 1.25. GetVariableDataType
 * _Class_
 *
 * Class to hold parameters for GetVariables request.
 *
 * GetVariableDataType is used by: `GetVariablesRequest`
 */
export type GetVariableDataType = {
  /**
   * Optional. Attribute type for which value is requested.
   * When absent, default Actual is assumed.
   */
  attributeType?: AttributeEnumType;

  /**
   * Required. Component for which the Variable is requested.
   */
  component: ComponentType;

  /**
   * Required. Variable for which the attribute value is requested.
   */
  variable: VariableType;
};
