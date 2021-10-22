/**
 * ### 1.23. EVSEType
 * _Class_
 *
 * Electric Vehicle Supply Equipment
 *
 * EVSEType is used by: Common:ComponentType, TriggerMessageRequest,
 * Renegotiate15118ScheduleRequest, TransactionEventRequest, ReserveNowRequest.ReservationType
 */
export type EVSEType = {
  /**
   * Required. EVSE Identifier. When 0, the ID references the Charging Station as a whole.
   */
  id: number; // integer

  /**
   * Optional. An id to designate a specific connector (on an EVSE) by connector index number.
   */
  connectorId?: number; // integer
};
