"use client";

import type { env } from "@/env";
import { Provider } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { type ChildrenProps } from "@/lib/types";
import { envVarsAtom } from "./atoms/common.atoms";

export interface JotaiHydratorProps extends ChildrenProps {
  envVars: typeof env;
}

export function JotaiHydrator({ children, envVars }: JotaiHydratorProps) {
  useHydrateAtoms([[envVarsAtom, envVars]]);

  return <Provider>{children}</Provider>;
}
