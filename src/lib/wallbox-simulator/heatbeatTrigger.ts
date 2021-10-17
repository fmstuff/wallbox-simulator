import { HeartbeatRequest } from "./ocpp/messages/heartBeat";

const DEFAULT_INTERVAL_SECONDS = 300;

let heartbeatTimer: NodeJS.Timeout;

/**
 * Start sending OCPP hearbeat messages in regular intervals (default: every 5 minutes).
 *
 * @param intervalSeconds The interval (in seconds) for the OCPP heartbeat message to be sent.
 */
export function startHeartbeat(
  websocket: WebSocket,
  intervalSeconds = DEFAULT_INTERVAL_SECONDS
) {
  heartbeatTimer = setTimeout(function () {
    sendHeartbeatMessage(websocket);
  }, intervalSeconds * 1000);

  console.log(`OCPP Heartbeat initialized with ${intervalSeconds} seconds.`);
}

/**
 * Reset the timer for the OCPP heartbeat message. Trigger this, whenever you send any other OCPP
 * message to the backend.
 *
 * (Reasoning: the heartbeat message should only be sent after the wallbox has been idling for the
 * specified amount of time...).
 *
 * @param intervalSeconds The interval (in seconds) for the OCPP heartbeat message to be sent.
 */
export function resetHeartbeatTimer(
  websocket: WebSocket,
  intervalSeconds = DEFAULT_INTERVAL_SECONDS
) {
  stopHeartbeat();
  startHeartbeat(websocket, intervalSeconds);
}

/**
 * Clears the OCPP heartbeat timer so that the wallbox simulator stops sending heartbeat messages.
 */
export function stopHeartbeat() {
  if (heartbeatTimer) {
    clearTimeout(heartbeatTimer);
  }
  heartbeatTimer = undefined;
  console.log(`OCPP Heartbeat timer cleared.`);
}

/**
 * Sends an OCPP heartbeat message.
 */
function sendHeartbeatMessage(websocket: WebSocket) {
  HeartbeatRequest(websocket, {});
}
