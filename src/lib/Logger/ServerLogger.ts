import { env } from "@/env";
import "server-only";
import { BaseLogger } from "./utils";

export const ServerLogger = env.REMOTE_LOGGER ? BaseLogger : BaseLogger;
