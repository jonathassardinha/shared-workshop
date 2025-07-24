export interface Logger {
  info: (message: unknown) => void;
  debug: (message: unknown) => void;
  error: (message: unknown) => void;
}

export const getBaseLogger = (debugEnabled: boolean): Logger => ({
  // eslint-disable-next-line no-console
  info: (message) => console.info(message),
  debug: (message) => {
    if (debugEnabled) {
      // eslint-disable-next-line no-console
      console.debug(message);
    }
  },
  error: (message) => console.error(message),
});
