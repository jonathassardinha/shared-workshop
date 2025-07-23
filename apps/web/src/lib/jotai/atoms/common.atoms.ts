import { atom } from "jotai";
import { type env } from "@/env";

type EnvVars = Partial<typeof env>;

export const envVarsAtom = atom<EnvVars>({});
