"use client";

import { useAtomValue } from "jotai";
import { envVarsAtom } from "../jotai/atoms/common.atoms";
import { BaseLogger } from "./utils";

export function useClientLogger() {
  const { REMOTE_LOGGER } = useAtomValue(envVarsAtom);

  if (REMOTE_LOGGER) {
    return BaseLogger;
  } else {
    return BaseLogger;
  }
}
