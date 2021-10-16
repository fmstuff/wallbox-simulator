import { writable } from "svelte/store";
import type { ChargingStateEnumType } from "./ocpp/types/chargingStateEnumType";

export const connectionStates = [
  "disconnected",
  "connecting",
  "connected",
  "error",
] as const;
export type ConnectionState = typeof connectionStates[number];

export const connectionState = writable<ConnectionState>("disconnected");

export const chargingState = writable<ChargingStateEnumType>();
