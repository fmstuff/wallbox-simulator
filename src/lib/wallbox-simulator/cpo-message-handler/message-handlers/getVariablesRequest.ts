import { AppLogger } from "../../../logger/logger";
import { sendGetVariablesResponse } from "../../ocpp/messages/getVariables";
import type { OcppAction, OcppCall } from "../../ocpp/messages/ocppMessage";
import type { GetVariablesRequest } from "../../ocpp/types/getVariableRequestType";
import type { GetVariablesResponseType } from "../../ocpp/types/getVariablesResponseType";
import type { GetVariableResultType } from "../../ocpp/types/getVariableResultType";
import { wallboxAuthMode } from "../../store";
import { get } from "svelte/store";

export const ocppAction: OcppAction = "GetVariables";

export class OcppGetVariablesRequestHandler {
  public canHandleAction(): OcppAction {
    return "GetVariables";
  }

  public handleOcppRequest(ocppCallMessage: OcppCall, websocket: WebSocket) {
    AppLogger.log(
      "CPO Backend",
      "GetVariables received & parsed",
      ocppCallMessage
    );

    const getVariablesRequest: GetVariablesRequest =
      ocppCallMessage.payload as GetVariablesRequest;

    // prepare the empty payload
    const responsePayload: GetVariablesResponseType = {
      getVariableResult: [],
    };

    // look at the requested variables
    for (const { component, variable } of getVariablesRequest.getVariableData) {
      if (`${component.name}.${variable.name}` === "AuthCtrlr.Enabled") {
        const authControllerEnabledResponse: GetVariableResultType = {
          component: {
            name: "AuthCtrlr",
          },
          variable: {
            name: "Enabled",
          },
          attributeType: "Actual",
          attributeValue: get(wallboxAuthMode) === "instant" ? "false" : "true",
          attributeStatus: "Accepted",
        };
        responsePayload.getVariableResult.push(authControllerEnabledResponse);
      }
    }

    // send the response back to the CSMS
    sendGetVariablesResponse(
      websocket,
      responsePayload,
      ocppCallMessage.messageId
    );
  }
}
