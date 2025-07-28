"use client";

import type { env } from "@/env";
import { useHydrateAtoms } from "jotai/utils";
import { type ChildrenProps } from "@/lib/types";
import { envVarsAtom } from "./atoms/common.atoms";

export interface JotaiHydratorProps extends ChildrenProps {
  envVars: Pick<typeof env, "NODE_ENV" | "REMOTE_LOGGER" | "DEBUG_LOGGER">;
}

export function JotaiHydrator({ children, envVars }: JotaiHydratorProps) {
  useHydrateAtoms([[envVarsAtom, envVars]]);

  return <>{children}</>;
}
