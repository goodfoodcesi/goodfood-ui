import "../../styles/components/steps.css";
type StepStatus = "empty" | "pending" | "passed";
export interface StepsProps {
    currentStep: number;
    steps: number;
}
export interface StepProps {
    status: StepStatus;
}
export declare const Steps: {
    ({ currentStep, steps }: StepsProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
