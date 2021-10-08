import {
  BootNotification,
  defaultBootNotificationPayload,
} from "./ocpp-messages/bootNotification";

export function disconnectStation(websocket, setConnectionState) {
  if (websocket) {
    websocket.close(3001);
    setConnectionState(false);
    console.log("Disconnected!");
  } else {
    console.log("Can't disconnect - no websocket connection found...");
  }
  return websocket;
}

export function connectStation(
  websocket,
  connectionString,
  setConnectionState,
  setErrorMessage,
  addLogMessage
) {
  setErrorMessage("");

  if (websocket) {
    websocket.close(3001);
    setConnectionState(false);
  }
  websocket = new WebSocket(connectionString, ["ocpp2.0"]);

  websocket.onopen = function (authorizationData) {
    setConnectionState(true);

    addLogMessage({
      source: "CS simulator",
      payload: "Websocket connection opened successfully!",
    });
    BootNotification(websocket, defaultBootNotificationPayload);
  };

  websocket.onerror = function (errorEvent) {
    if (errorEvent.target.readyState === 3) {
      setErrorMessage("The connection was closed or could not be established.");
      addLogMessage({
        source: "CS simulator",
        payload: "The connection was closed or could not be established.",
      });
    }
    setConnectionState(false);
  };

  websocket.onclose = function () {
    addLogMessage({
      source: "CS simulator",
      payload: "Websocket connection closed.",
    });
    setConnectionState(false);
  };

  websocket.onmessage = function (event) {
    addLogMessage({ source: "CPO backend", payload: event.data });
  };

  return websocket;
}
