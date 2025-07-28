import React, { useCallback, useMemo } from "react";
import { type StepperContextValue, type StepperProps } from "./types";

const StepperContextInternal = React.createContext<
  StepperContextValue | undefined
>(undefined);

export const StepperContext = ({
  steps,
  currentStep,
  onStepChange,
  onBeforeStepChange,
  children,
}: StepperProps & { children: React.ReactNode }) => {
  const goToStep: StepperContextValue["goToStep"] = useCallback(
    async (stepUpdater) => {
      const targetStep =
        typeof stepUpdater === "function"
          ? stepUpdater(currentStep)
          : stepUpdater;

      // Call onBeforeStepChange if provided
      if (onBeforeStepChange) {
        const canProceed = await onBeforeStepChange(currentStep, targetStep);
        if (!canProceed) {
          return;
        }
      }

      onStepChange(targetStep);
    },
    [currentStep, onBeforeStepChange, onStepChange],
  );

  const goToNext = useCallback(async (): Promise<void> => {
    await goToStep((currentState) => {
      if (currentState === steps.length) {
        return currentState;
      }
      return currentState + 1;
    });
  }, [steps.length, goToStep]);

  const goToPrevious = useCallback((): void => {
    void goToStep((currentState) => {
      if (currentState === 1) {
        return currentState;
      }
      return currentState - 1;
    });
  }, [goToStep]);

  const contextValue: StepperContextValue = useMemo(
    () => ({
      steps,
      currentStep,
      totalSteps: steps.length,
      isFirstStep: currentStep === 1,
      isLastStep: currentStep === steps.length,
      goToStep,
      goToNext,
      goToPrevious,
    }),
    [steps, currentStep, goToStep, goToNext, goToPrevious],
  );

  return (
    <StepperContextInternal.Provider value={contextValue}>
      {children}
    </StepperContextInternal.Provider>
  );
};

export const useStepper = () => {
  const context = React.useContext(StepperContextInternal);
  if (!context) {
    throw new Error(
      "useStepper must be used within a StepperContext component",
    );
  }
  return context;
};
