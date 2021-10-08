import { v4 as uuidv4 } from "uuid";

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
 *
 */
const ocppActions = ["BootNotification", "TransactionEvent"] as const;
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
      console.warn(
        `No websocket connection found for sending ${ocppActionType}... aborting.`
      );
      return;
    }

    const ocppMessage = JSON.stringify([
      OcppMessageType.CALL,
      messageId,
      ocppActionType,
      payload,
    ]);

    console.log(`Sending ${ocppActionType}.`);
    websocket.send(ocppMessage);
    sessionStorage.setItem("LastAction", ocppActionType);
    console.log(`${ocppActionType} sent!`);
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
