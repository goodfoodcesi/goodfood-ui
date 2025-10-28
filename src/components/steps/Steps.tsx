import "../../styles/components/steps.css";

type StepStatus = "empty" | "pending" | "passed";

export interface StepsProps {
  currentStep: number;
  steps: number;
}

export interface StepProps {
  status: StepStatus;
}

export const Steps = ({ currentStep, steps }: StepsProps) => {
  const stepArray = Array.from({ length: steps }, (_, i) => i + 1);

  return (
    <div className="steps-wrapper w-[390px]">
      {stepArray.map((stepNumber) => {
        let status: StepStatus = "empty";

        if (stepNumber < currentStep) status = "passed";
        else if (stepNumber === currentStep) status = "pending";

        return <Step key={stepNumber} status={status} />;
      })}
    </div>
  );
};

const Step = ({ status }: StepProps) => {
  return <div className={`step ${status}`}></div>;
};

Steps.displayName = "Steps";
