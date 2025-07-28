# Stepper Component

A flexible, accessible stepper component for multi-step forms and wizards. The component is form-agnostic and validation-library agnostic, giving you full control over validation logic and form state management.

## Features

- **Form Agnostic**: Works with any form library (React Hook Form, Formik, etc.) or custom validation
- **External Validation Control**: Parent component controls all validation logic
- **Accessible**: Built with accessibility best practices
- **Customizable**: Configurable step indicators, connectors, and navigation
- **TypeScript Support**: Fully typed with excellent developer experience
- **Performance Optimized**: Minimal re-renders with optimized context management

## Components

- `Stepper` - Main stepper container
- `StepperNavigation` - Container for navigation buttons
- `StepperBackButton` - Previous step navigation
- `StepperNextButton` - Next step navigation
- `StepperSubmitButton` - Submit button (only shown on last step)

## Basic Usage

```tsx
import { useState } from "react";
import {
  Stepper,
  StepperNavigation,
  StepperBackButton,
  StepperNextButton,
  StepperSubmitButton,
} from "@/components/ui/Stepper";

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: "personal-info",
      title: "Personal Information",
      content: <PersonalInfoStep />,
    },
    {
      id: "preferences",
      title: "Preferences",
      content: <PreferencesStep />,
    },
    {
      id: "review",
      title: "Review & Submit",
      content: <ReviewStep />,
    },
  ];

  return (
    <form>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />

      <StepperNavigation>
        <StepperBackButton />
        <div className="flex gap-2">
          <StepperNextButton />
          <StepperSubmitButton />
        </div>
      </StepperNavigation>
    </form>
  );
}
```

## Advanced Usage with Validation

```tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const step1Schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
});

const step2Schema = z.object({
  preferences: z.array(z.string()).min(1, "Select at least one preference"),
});

export function ValidatedMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const form = useForm({ mode: "onChange" });

  const handleBeforeStepChange = async (
    currentStep: number,
    targetStep: number,
  ) => {
    // Only validate when moving forward
    if (targetStep > currentStep) {
      let fieldsToValidate: string[] = [];

      switch (currentStep) {
        case 1:
          fieldsToValidate = ["name", "email"];
          break;
        case 2:
          fieldsToValidate = ["preferences"];
          break;
      }

      const isValid = await form.trigger(fieldsToValidate);
      if (!isValid) {
        return false; // Prevent step change
      }

      // Additional logic like saving draft data
      await saveDraftData(form.getValues());
    }

    return true; // Allow step change
  };

  const steps = [
    {
      id: "personal-info",
      title: "Personal Information",
      content: <PersonalInfoForm form={form} />,
    },
    {
      id: "preferences",
      title: "Preferences",
      content: <PreferencesForm form={form} />,
    },
    {
      id: "review",
      title: "Review & Submit",
      content: <ReviewForm form={form} />,
    },
  ];

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
        onBeforeStepChange={handleBeforeStepChange}
        isValid={form.formState.isValid}
        showStepNumbers={true}
        showConnectors={true}
      />

      <StepperNavigation className="mt-8">
        <StepperBackButton />
        <div className="flex gap-2">
          <StepperNextButton />
          <StepperSubmitButton>Complete Setup</StepperSubmitButton>
        </div>
      </StepperNavigation>
    </form>
  );
}
```

## API Reference

### Stepper Props

```typescript
interface StepperProps {
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
```

#### Props Description

| Prop                 | Type                                                               | Default  | Description                                               |
| -------------------- | ------------------------------------------------------------------ | -------- | --------------------------------------------------------- |
| `steps`              | `StepConfig[]`                                                     | Required | Array of step configurations                              |
| `currentStep`        | `number`                                                           | Required | Current active step (1-indexed)                           |
| `onStepChange`       | `Dispatch<SetStateAction<number>>`                                 | Required | Callback when step changes                                |
| `onBeforeStepChange` | `(current: number, target: number) => Promise<boolean> \| boolean` | Optional | Validation callback before step change                    |
| `isValid`            | `boolean`                                                          | `true`   | Whether current step is valid (affects Next button state) |
| `className`          | `string`                                                           | Optional | Additional CSS classes                                    |
| `allowSkipSteps`     | `boolean`                                                          | `false`  | Allow clicking on future steps                            |
| `showStepNumbers`    | `boolean`                                                          | `true`   | Show step numbers in indicators                           |
| `showConnectors`     | `boolean`                                                          | `true`   | Show connecting lines between steps                       |

### StepConfig

```typescript
interface StepConfig {
  id: string;
  title: string;
  content: ReactNode;
  description?: string;
}
```

### Navigation Components Props

All navigation components accept standard button props plus:

```typescript
interface NavigationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}
```

## Styling

The Stepper components use Tailwind CSS classes and can be customized by:

1. **Passing className props** to override default styles
2. **CSS custom properties** for theming
3. **Tailwind configuration** for global design system changes

### Example Customization

```tsx
<Stepper
  className="bg-gray-50 p-6 rounded-lg"
  steps={steps}
  currentStep={currentStep}
  onStepChange={setCurrentStep}
/>

<StepperNavigation className="justify-center gap-4">
  <StepperBackButton className="bg-gray-200 text-gray-800">
    Previous
  </StepperBackButton>
  <StepperNextButton className="bg-blue-600 text-white">
    Continue
  </StepperNextButton>
</StepperNavigation>
```

## Accessibility

The Stepper component follows accessibility best practices:

- **Keyboard Navigation**: Full keyboard support for navigation
- **Screen Reader Support**: Proper ARIA labels and announcements
- **Focus Management**: Logical focus flow between steps
- **Status Indicators**: Clear visual and programmatic status for each step

## Best Practices

1. **Keep steps focused**: Each step should have a clear, single purpose
2. **Provide clear titles**: Use descriptive step titles and optional descriptions
3. **Handle validation properly**: Use `onBeforeStepChange` for robust validation
4. **Save progress**: Consider auto-saving form data between steps
5. **Provide feedback**: Show loading states during async validation
6. **Plan for errors**: Handle validation errors gracefully with clear messaging

## Integration Examples

### With React Hook Form

```tsx
const form = useForm({ mode: "onChange" });
const isCurrentStepValid = form.formState.isValid;
```

### With Formik

```tsx
const formik = useFormik({ ... });
const isCurrentStepValid = formik.isValid;
```

### With Custom Validation

```tsx
const [isValid, setIsValid] = useState(false);
// Custom validation logic
```
