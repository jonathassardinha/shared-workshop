import { type Dispatch, type ReactNode, type SetStateAction } from "react";

export interface StepConfig {
  id: string;
  title: string;
  description?: string;
  content: ReactNode;
}

export interface StepperProps {
  steps: StepConfig[];
  currentStep: number;
  onStepChange: Dispatch<SetStateAction<number>>;
  onBeforeStepChange?: (
    currentStep: number,
    targetStep: number,
  ) => Promise<boolean> | boolean;
  isValid?: boolean;
  className?: string;
  allowSkipSteps?: boolean;
  showStepNumbers?: boolean;
  showConnectors?: boolean;
}

export interface StepperContextValue {
  steps: StepConfig[];
  currentStep: number;
  totalSteps: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  goToStep: (
    stepUpdater: number | ((currentState: number) => number),
  ) => Promise<void>;
  goToNext: () => Promise<void>;
  goToPrevious: () => void;
}
