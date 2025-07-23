import { env } from "@/env";

export interface Logger {
  info: (message: string) => void;
  debug: (message: string) => void;
  error: (message: string) => void;
}

export const BaseLogger: Logger = {
  // eslint-disable-next-line no-console
  info: (message) => console.info(message),
  debug: (message) => {
    if (env.DEBUG_LOGGER) {
      // eslint-disable-next-line no-console
      console.debug(message);
    }
  },
  error: (message) => console.error(message),
};
