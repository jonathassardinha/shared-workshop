"use client";

import { useAtomValue } from "jotai";
import { useMemo } from "react";
import { envVarsAtom } from "../jotai/atoms/common.atoms";
import { getBaseLogger } from "./Logger.utils";

export function useClientLogger() {
  const envVars = useAtomValue(envVarsAtom);

  const baseLogger = useMemo(
    () => getBaseLogger(envVars.DEBUG_LOGGER ?? false),
    [envVars.DEBUG_LOGGER],
  );

  if (envVars.REMOTE_LOGGER) {
    return baseLogger;
  } else {
    return baseLogger;
  }
}
