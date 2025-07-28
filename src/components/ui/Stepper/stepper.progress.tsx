import React from "react";
import { cn } from "../../../lib/cn";
import { useStepper } from "./stepper.context";

interface StepperProgressProps {
  className?: string;
  allowSkipSteps?: boolean;
  showStepNumbers?: boolean;
  showConnectors?: boolean;
}

export function StepperProgress({
  className,
  allowSkipSteps = false,
  showStepNumbers = true,
  showConnectors = true,
}: StepperProgressProps) {
  const { steps, currentStep, goToStep } = useStepper();

  return (
    <div className={cn("mb-8", className)}>
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
  );
}
