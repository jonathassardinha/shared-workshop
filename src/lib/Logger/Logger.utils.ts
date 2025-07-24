export interface Logger {
  info: (...messages: unknown[]) => void;
  debug: (...messages: unknown[]) => void;
  error: (...messages: unknown[]) => void;
}

export const getBaseLogger = (debugEnabled: boolean): Logger => ({
  // eslint-disable-next-line no-console
  info: (...messages) => console.info(...messages),
  debug: (...messages) => {
    if (debugEnabled) {
      // eslint-disable-next-line no-console
      console.debug(...messages);
    }
  },
  error: (...messages) => console.error(...messages),
});
