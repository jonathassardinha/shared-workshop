import React from "react";
import { type StepperContextValue } from "./types";

const StepperContext = React.createContext<StepperContextValue | undefined>(
  undefined,
);

export const StepperProvider = StepperContext.Provider;

export const useStepper = () => {
  const context = React.useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a Stepper component");
  }
  return context;
};
