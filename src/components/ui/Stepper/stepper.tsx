"use client";

import React, { useCallback, useMemo } from "react";
import { cn } from "../../../lib/cn";
import { type StepperProps, type StepperContextValue } from "./types";
import { StepperProvider } from "./stepper.context";

export function Stepper({
  steps,
  currentStep,
  onStepChange,
  onBeforeStepChange,
  className,
  allowSkipSteps = false,
  showStepNumbers = true,
  showConnectors = true,
}: StepperProps) {
  const currentStepConfig = useMemo(() => {
    return steps[currentStep - 1];
  }, [steps, currentStep]);

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
      if (currentState === steps.length - 1) {
        return currentState;
      }
      return currentState + 1;
    });
  }, [steps.length, goToStep]);

  const goToPrevious = useCallback((): void => {
    void goToStep((currentState) => {
      if (currentState === 0) {
        return currentState;
      }
      return currentState - 1;
    });
  }, [goToStep]);

  const contextValue: StepperContextValue = useMemo(
    () => ({
      currentStep,
      totalSteps: steps.length,
      isFirstStep: currentStep === 1,
      isLastStep: currentStep === steps.length,
      goToStep,
      goToNext,
      goToPrevious,
    }),
    [currentStep, steps.length, goToStep, goToNext, goToPrevious],
  );

  return (
    <StepperProvider value={contextValue}>
      <div className={cn("w-full", className)}>
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const stepNumber = index + 1;
              const isActive = stepNumber === currentStep;
              const isCompleted = stepNumber < currentStep;
              const isClickable = allowSkipSteps && stepNumber <= currentStep;

              return (
                <div key={step.id} className="flex items-center">
                  <div
                    className={cn(
                      "flex items-center justify-center rounded-full text-sm font-medium transition-colors",
                      showStepNumbers ? "h-8 w-8" : "h-3 w-3",
                      {
                        "bg-blue-600 text-white": isActive || isCompleted,
                        "bg-gray-700 text-gray-400": !isActive && !isCompleted,
                        "cursor-pointer hover:bg-blue-700": isClickable,
                      },
                    )}
                    onClick={
                      isClickable ? () => void goToStep(stepNumber) : undefined
                    }
                    role={isClickable ? "button" : undefined}
                    tabIndex={isClickable ? 0 : undefined}
                  >
                    {showStepNumbers ? stepNumber : null}
                  </div>
                  <span
                    className={cn("ml-2 text-sm", {
                      "text-white": isActive || isCompleted,
                      "text-gray-400": !isActive && !isCompleted,
                    })}
                  >
                    {step.title}
                  </span>
                  {showConnectors && index < steps.length - 1 && (
                    <div
                      className={cn("mx-4 h-px flex-1", {
                        "bg-blue-600": isCompleted,
                        "bg-gray-700": !isCompleted,
                      })}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="step-content">
          {currentStepConfig ? currentStepConfig.content : null}
        </div>
      </div>
    </StepperProvider>
  );
}
