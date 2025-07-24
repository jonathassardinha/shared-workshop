import { env } from "@/env";
import "server-only";
import { getBaseLogger } from "./Logger.utils";

export const ServerLogger = env.REMOTE_LOGGER
  ? getBaseLogger(env.DEBUG_LOGGER ?? false)
  : getBaseLogger(env.DEBUG_LOGGER ?? false);
