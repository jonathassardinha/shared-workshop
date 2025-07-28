import React, { type ReactNode } from "react";
import { cn } from "../../../lib/cn";
import { Button } from "../button";
import { useStepper } from "./stepper.context";

export function StepperNavigation({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex justify-between", className)}>{children}</div>
  );
}

export function StepperBackButton({
  children = "Back",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
}) {
  const { goToPrevious, isFirstStep } = useStepper();

  return (
    <Button
      type="button"
      variant="outline"
      onClick={goToPrevious}
      disabled={isFirstStep}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}

export function StepperNextButton({
  children = "Next",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
}) {
  const { goToNext, isLastStep } = useStepper();

  return (
    <Button
      type="button"
      variant="default"
      onClick={() => void goToNext()}
      disabled={isLastStep}
      className={className}
      {...props}
    >
      {children}
    </Button>
  );
}

export function StepperSubmitButton({
  children = "Submit",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
}) {
  const { isLastStep } = useStepper();

  if (!isLastStep) return null;

  return (
    <Button
      type="submit"
      variant="default"
      className={cn(
        "bg-green-600 hover:bg-green-700 focus-visible:ring-green-500/20",
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
