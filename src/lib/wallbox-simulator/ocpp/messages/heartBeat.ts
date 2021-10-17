import { OcppCallMessageBuilder } from "./ocppMessage";

export type HeartBeatRequestPayload = {};

/**
 * ### 1.29.1. HeartbeatRequest
 *
 * This contains the field definition of the HeartbeatRequest PDU sent by the
 * Charging Station to the CSMS. No fields are defined.
 */
export const HeartbeatRequest =
  OcppCallMessageBuilder<HeartBeatRequestPayload>("Heartbeat");
