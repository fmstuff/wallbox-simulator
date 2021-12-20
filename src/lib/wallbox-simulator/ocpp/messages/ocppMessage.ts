import { AppLogger } from "../../../logger/logger";
import { v4 as uuidv4 } from "uuid";
import { resetHeartbeatTimer } from "../../heatbeatTrigger";

/**
 * Specifies the nature of any OCPP message. To identify the type of message one
 * of the following Message Type Numbers MUST be used.
 */
export enum OcppMessageType {
  CALL = 2, // Client-to-Server Request message
  CALLRESULT = 3, // Server-to-Client Response message
  CALLERROR = 4, // Server-to-Client Error response to a request message
}

/**
 * List of OCCP actions implemented & supported by the simulator.
 */
const ocppActions = [
  "BootNotification",
  "Heartbeat",
  "TransactionEvent",
  "GetVariables",
  "RequestStopTransaction",
] as const;
export type OcppAction = typeof ocppActions[number];

/**
 * Unique message ID, maximum length of 36 characters, to allow for UUIDs/GUIDs.
 *
 * The message ID serves to identify a request. A message ID for any CALL
 * message MUST be different from all message IDs previously used by the same
 * sender for any other CALL messages on the same WebSocket connection.
 *
 * A message ID for a CALLRESULT or CALLERROR message MUST be equal to that of
 * the CALL message that the CALLRESULT or CALLERROR message is a response to.
 *
 */
export type OcppMessageId = string;

/**
 * A CALL always consists of 4 elements:
 * The standard elements MessageTypeId and MessageId, a specific Action that is
 * required on the other side and a payload, the arguments to the Action.
 *
 * The syntax of a CALL looks like this:
 * `[<MessageTypeId>, "<MessageId>", "<Action>", {<Payload>}`
 */
export interface OcppCall {
  /**
   * This is a Message Type Number which is used to identify the type of the
   * message.
   * */
  messageTypeId: OcppMessageType.CALL;

  /**
   * This is a unique identifier that will be used to match request and result.
   */
  messageId: OcppMessageId;

  /**
   * The name of the remote procedure or action. This field SHALL contain a
   * case-sensitive string.
   * The field SHALL contain the OCPP Message name without the "Request" suffix.
   *
   * For example:
   * For a "BootNotificationRequest", this field shall be set to "BootNotification".
   */
  action: OcppAction;

  /**
   * JSON compatible payload of the action.
   */
  payload: object;
}

/**
 * If the call can be handled correctly the result will be a regular CALLRESULT.
 * Error situations that are covered by the definition of the OCPP response
 * definition are not considered errors in this context.
 *
 * They are regular results and as such will be treated as a normal CALLRESULT,
 * even if the result is undesirable for the recipient.
 *
 * A CALLRESULT always consists of 3 elements:
 * The standard elements MessageTypeId and MessageId and a payload, containing
 * the response to the Action in the original Call.
 *
 * The syntax of a CALLRESULT looks like this:
 * `[<MessageTypeId>, "<MessageId>", {<Payload>}]`
 */
export interface OcppCallResult {
  /**
   * This is a Message Type Number which is used to identify the type of the
   * message.
   */
  messageTypeId: OcppMessageType.CALLRESULT;

  /**
   * This must be the exact same ID that is in the call request so that the
   * recipient can match request and result.
   */
  messageId: OcppMessageId;

  /**
   * JSON compatible payload of the action.
   */
  payload: object;
}

/**
 * Generate a random OCPP message ID.
 *
 * @returns A random OCPP message ID.
 */
function generateOcppMessageId(): string {
  return uuidv4();
}

/**
 * Builds a function to send an OCPP CALL message of the given ACTION type
 * (`ocppActionType`) via a websocket.
 *
 * You can use the `<PayloadType>` to specify the type of payload to be accepted
 * by the generated function.
 *
 * @param ocppActionType The OCPP action type to to build a CALL message for.
 * @returns A function that can be used to send the OCPP CALL message.
 */
export function OcppCallMessageBuilder<PayloadType>(
  ocppActionType: OcppAction
) {
  return (
    websocket: WebSocket,
    payload: PayloadType,
    messageId = generateOcppMessageId()
  ) => {
    if (!websocket || !websocket.send) {
      AppLogger.warn(
        "Wallbox Simulator",
        `No websocket connection found for sending ${ocppActionType}... aborting.`
      );
      return;
    }

    const ocppMessage = [
      OcppMessageType.CALL,
      messageId,
      ocppActionType,
      payload,
    ];

    AppLogger.log("Wallbox Simulator", `Sending ${ocppActionType}.`);

    resetHeartbeatTimer(websocket);
    websocket.send(JSON.stringify(ocppMessage));

    AppLogger.log("Wallbox Simulator", `${ocppActionType} sent!`, ocppMessage);
  };
}

/**
 * Builds a function to send an OCPP CALLRESULT message via a websocket.
 *
 * You can use the `<PayloadType>` to specify the type of payload to be accepted
 * by the generated function.
 *
 * @returns A function that can be used to send the OCPP CALLRESULT message.
 */
export function OcppCallResultMessageBuilder<PayloadType>() {
  return (websocket: WebSocket, payload: PayloadType, messageId: string) => {
    if (!websocket || !websocket.send) {
      console.warn(
        `No websocket connection found for sending OCCP response message... aborting.`
      );
      return;
    }

    const ocppMessage = JSON.stringify([
      OcppMessageType.CALLRESULT,
      messageId,
      payload,
    ]);

    console.log(`Sending OCPP CALLRESULT message: ${ocppMessage}`);
    websocket.send(ocppMessage);
    console.log(`OCPP CALLRESULT sent!`);
  };
}
