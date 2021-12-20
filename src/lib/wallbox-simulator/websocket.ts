import { AppLogger } from "../logger/logger";
import { CpoOcppMessageHandler } from "./cpo-message-handler/cpo-message-handler";
import {
  sendBootNotificationRequest,
  defaultBootNotificationPayload,
} from "./ocpp/messages/bootNotification";

export function disconnectStation(websocket: WebSocket) {
  if (websocket) {
    websocket.close(3001);
    console.log("Disconnected!");
  } else {
    console.log("Can't disconnect - no websocket connection found...");
  }
  return websocket;
}

export function connectStation(
  websocket: WebSocket,
  connectionString: string,
  setConnectionState: (isConnected: boolean) => void
) {
  if (websocket) {
    websocket.close(3001);
    setConnectionState(false);
  }
  websocket = new WebSocket(connectionString, ["ocpp2.0"]);

  websocket.onopen = function (authorizationData) {
    setConnectionState(true);

    AppLogger.log(
      "Wallbox Simulator",
      "Websocket connection opened successfully!"
    );
    sendBootNotificationRequest(websocket, defaultBootNotificationPayload);
  };

  websocket.onerror = function (errorEvent) {
    AppLogger.log("Wallbox Simulator", "WebSocket error!", errorEvent);
    setConnectionState(false);
    if (websocket.readyState === 3) {
      AppLogger.log(
        "Wallbox Simulator",
        "The connection was closed or could not be established."
      );
    }
  };

  websocket.onclose = function () {
    AppLogger.log("Wallbox Simulator", "Websocket connection closed.");
    setConnectionState(false);
  };

  websocket.onmessage = function (event) {
    CpoOcppMessageHandler.handleMessage(JSON.parse(event.data));
  };

  return websocket;
}
