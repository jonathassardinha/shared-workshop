import React from "react";
import { cn } from "../../../lib/cn";
import { useStepper } from "./stepper.context";

interface StepperContentProps {
  className?: string;
}

export function StepperContent({ className }: StepperContentProps) {
  const { steps, currentStep } = useStepper();

  const currentStepConfig = steps[currentStep - 1];

  return (
    <div className={cn("step-content", className)}>
      {currentStepConfig ? currentStepConfig.content : null}
    </div>
  );
}
