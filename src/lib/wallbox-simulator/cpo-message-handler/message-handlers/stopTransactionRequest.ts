import { AppLogger } from "../../../logger/logger";
import { get } from "svelte/store";
import { stopCurrentChargingSession } from "../../chargingSessionHandling";
import type { OcppAction, OcppCall } from "../../ocpp/messages/ocppMessage";
import type { RequestStopTransactionRequest } from "../../ocpp/types/requestStopTransactionRequest";
import type { RequestStopTransactionResponse } from "../../ocpp/types/requestStopTransactionResponse";
import { ocppTransactionId } from "../../store";
import { sendRequestStopTransactionResponse } from "../../ocpp/messages/requestStopTransaction";

export const ocppAction: OcppAction = "RequestStopTransaction";

export class OcppRequestStopTransactionRequestHandler {
  public canHandleAction(): OcppAction {
    return "RequestStopTransaction";
  }

  public handleOcppRequest(ocppCallMessage: OcppCall, websocket: WebSocket) {
    AppLogger.log(
      "CPO Backend",
      "RequestStopTransaction received & parsed",
      ocppCallMessage
    );

    const stopTransactionRequest: RequestStopTransactionRequest =
      ocppCallMessage.payload as RequestStopTransactionRequest;

    // compare current transaction ID to requested stop ID
    // // if match: stop respond with "Accepted" & then stop session
    // // otherwise: respond with "Rejected"
    if (stopTransactionRequest.transactionId !== get(ocppTransactionId)) {
      // prepare the payload
      const responsePayload: RequestStopTransactionResponse = {
        status: "Rejected",
      };

      // send the response
      sendRequestStopTransactionResponse(
        websocket,
        responsePayload,
        ocppCallMessage.messageId
      );
    } else {
      // prepare the payload
      const responsePayload: RequestStopTransactionResponse = {
        status: "Accepted",
      };

      // send the response
      sendRequestStopTransactionResponse(
        websocket,
        responsePayload,
        ocppCallMessage.messageId
      );

      // after sending the response, actually stop the session
      stopCurrentChargingSession();
    }
  }
}
