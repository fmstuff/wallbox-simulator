export type LogSource = "Wallbox Simulator" | "CPO Backend";

export class AppLogger {
  public static log(
    source: LogSource,
    message: string,
    payload?: string | object
  ) {
    console.log({
      source,
      message,
      payload,
    });
  }

  public static warn(
    source: LogSource,
    message: string,
    payload?: string | object
  ) {
    console.warn({
      source,
      message,
      payload,
    });
  }
}
