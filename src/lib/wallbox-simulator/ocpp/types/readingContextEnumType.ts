/**
 * ### 2.63. ReadingContextEnumType
 * _Enumeration_
 *
 * Values of the context field.
 *
 * ReadingContextEnumType is used by: Common:SampledValueType
 */
export type ReadingContextEnumType = typeof readingContexts[number];

export const readingContexts = [
  "Interruption.Begin", // Value taken at start of interruption.
  "Interruption.End", // Value taken when resuming after interruption.
  "Other", // Value for any other situations.
  "Sample.Clock", // Value taken at clock aligned interval.
  "Sample.Periodic", // Value taken as periodic sample relative to start time of transaction.
  "Transaction.Begin", // Value taken at start of transaction.
  "Transaction.End", // Value taken at end of transaction.
  "Trigger", // Value taken in response to TriggerMessageRequest.
] as const;
