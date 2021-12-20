import type { TransactionEventRequest } from "../../types/transactionEventRequest";
import { OcppCallMessageBuilder } from "../ocppMessage";

/**
 * Sends a TransactionEvent request to the CSMS backend.
 */
export const sendTransactionEventRequest =
  OcppCallMessageBuilder<TransactionEventRequest>("TransactionEvent");
