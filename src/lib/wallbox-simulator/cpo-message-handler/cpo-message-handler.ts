import { get } from "svelte/store";
import { AppLogger } from "../../logger/logger";
import type { OcppCall } from "../ocpp/messages/ocppMessage";
import { OcppMessageType } from "../ocpp/messages/ocppMessage";
import { webSocket } from "../store";
import { OcppGetVariablesRequestHandler } from "./message-handlers/getVariablesRequest";
import { OcppRequestStopTransactionRequestHandler } from "./message-handlers/stopTransactionRequest";

export class CpoOcppMessageHandler {
  private static requestHandlers = [
    new OcppGetVariablesRequestHandler(),
    new OcppRequestStopTransactionRequestHandler(),
  ];

  public static handleMessage(payload: object) {
    if (!Array.isArray(payload)) {
      AppLogger.warn(
        "Wallbox Simulator",
        "Unexpected OCPP message payload received from CPO backend (not an array...)"
      );
      return;
    }

    if (payload.length < 2) {
      AppLogger.warn(
        "Wallbox Simulator",
        "Unexpected OCPP message payload received from CPO backend: " +
          `array length < 2 (${payload.length})`
      );
      return;
    }

    const messageType = payload[0];

    // REQUEST from backend / CALL
    if (messageType === OcppMessageType.CALL) {
      return this.handleOcppCall(payload);
    }

    // RESPONSE from backend / CALLRESULT
    if (messageType === OcppMessageType.CALLRESULT) {
      this.handleOcppCallResult(payload);
      return;
    }

    // ERROR from backend / CALLERROR
    if (messageType === OcppMessageType.CALLERROR) {
      return this.handleOcppCallError(payload);
    }

    AppLogger.warn(
      "CPO Backend",
      "WARNING: unexpected OCPP message from CPO",
      payload
    );
  }

  private static handleOcppCallResult(payload: object) {
    AppLogger.log(
      "CPO Backend",
      "RESPONSE (call result) from CPO backend received",
      payload
    );
  }

  private static handleOcppCall(payload: object) {
    AppLogger.log(
      "CPO Backend",
      `${payload[2]} REQUEST (call) from CPO backend received.`,
      payload
    );

    const ocppMessage = this.parseOcppRequest(payload);

    for (const handler of this.requestHandlers) {
      if (handler.canHandleAction() === ocppMessage.action) {
        return handler.handleOcppRequest(ocppMessage, get(webSocket));
      }
    }
  }

  private static handleOcppCallError(payload: object) {
    AppLogger.warn(
      "CPO Backend",
      "ERROR (call error) from CPO backend received",
      payload
    );
  }

  private static parseOcppRequest(payload: object): OcppCall {
    return {
      messageTypeId: OcppMessageType.CALL,
      messageId: payload[1],
      action: payload[2],
      payload: payload[3],
    };
  }
}
