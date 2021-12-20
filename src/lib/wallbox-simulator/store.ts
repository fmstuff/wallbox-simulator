import { writable } from "svelte/store";
import type { ChargingStateEnumType } from "./ocpp/types/chargingStateEnumType";

// WEBSOCKET
export const webSocket = writable<WebSocket>();

// CONNECTION STATE
export const connectionStates = [
  "disconnected",
  "connecting",
  "connected",
  "error",
] as const;
export type ConnectionState = typeof connectionStates[number];
export const connectionState = writable<ConnectionState>("disconnected");

// AUTHORIZATION MODE
export type WallboxAuthModes = "instant" | "private";
const storedwallboxAuthMode = localStorage.getItem("wallboxAuthMode");
export const wallboxAuthMode = writable<WallboxAuthModes>(
  storedwallboxAuthMode === "private" ? "private" : "instant"
);

wallboxAuthMode.subscribe((value) => {
  localStorage.setItem("wallboxAuthMode", value);
});

// CHARGING STATE
export const chargingState = writable<ChargingStateEnumType>();

// OCPP TRANSACTION DATA
export const transactionStartTime = writable<Date>();
export const ocppTransactionId = writable<string>();

// METER VALUE
export const DEFAULT_WALLBOX_POWER_KWH = 11;
export const wallboxPowerKWh = writable<number>(DEFAULT_WALLBOX_POWER_KWH);

const storedMeterValue = localStorage.getItem("wallboxMeterWh") ?? "0";
export const wallboxMeterWh = writable<number>(
  parseInt(storedMeterValue, 10) ?? 0
);

wallboxMeterWh.subscribe((value) => {
  localStorage.setItem("wallboxMeterWh", value.toString());
});
