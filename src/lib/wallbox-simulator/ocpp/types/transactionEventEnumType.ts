/**
 * ### 2.78. TransactionEventEnumType
 * _Enumeration_
 *
 * TransactionEventEnumType is used by: transactionEvent:TransactionEventRequest
 */
export type TransactionEventEnumType = typeof transactionEventTypes[number];

export const transactionEventTypes = [
  "Ended", // Last event of a transaction
  "Started", // First event of a transaction.
  "Updated", // Transaction event in between 'Started' and 'Ended'.
] as const;
