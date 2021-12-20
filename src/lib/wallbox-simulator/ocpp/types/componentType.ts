import type { EVSEType } from "./evseType";

/**
 * 1.16. ComponentType
 * _Class_
 *
 * A physical or logical component.
 *
 * ComponentType is used by:
 * - `Common:ComponentVariableType`
 * - `Common:MessageInfoType`
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
export type ComponentType = {
  /**
   * Required. Name of the component. Name should be taken from the list of
   * standardized component names whenever possible.
   *
   * Case Insensitive. strongly advised to use Camel Case.
   */
  name: string;

  /**
   * Optional. Name of instance in case the component exists as multiple
   * instances.
   *
   * Case Insensitive. strongly advised to use Camel Case.
   */
  instance?: string;

  /**
   * Optional. Specifies the EVSE when component is located at EVSE level, also
   * specifies the connector when component is located at Connector level.
   */
  evse?: EVSEType;
};
