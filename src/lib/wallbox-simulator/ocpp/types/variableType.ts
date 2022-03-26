/**
 * ### 1.56. VariableType
 * _Class_
 *
 * Reference key to a component-variable.
 *
 * VariableType is used by:
 * - `Common:ComponentVariableType`
 * - `GetVariablesRequest.GetVariableDataType`
 * - `GetVariablesResponse.GetVariableResultType`
 * - `NotifyMonitoringReportRequest.MonitoringDataType`
 * - `NotifyReportRequest.ReportDataType`
 * - `SetVariableMonitoringRequest.SetMonitoringDataType`
 * - `SetVariableMonitoringResponse.SetMonitoringResultType`
 * - `SetVariablesRequest.SetVariableDataType`
 * - `SetVariablesResponse.SetVariableResultType`
 * - `NotifyEventRequest.EventDataType`
 */
export type VariableType = {
  /**
   * Required. Name of the variable. Name should be taken from the list of
   * standardized variable names whenever possible.
   *
   * Case Insensitive. strongly advised to use CamelCase.
   */
  name: string;

  /**
   * Optional. Name of instance in case the variable exists as multiple
   * instances. Case Insensitive. strongly advised to use Camel Case.
   */
  instance?: string;
};
