import React from "react";
type MultiStepContextValue = {
    step: number;
    stepsCount: number;
    next: () => void;
    prev: () => void;
    goTo: (index: number) => void;
};
export declare function useMultiStep(): MultiStepContextValue;
export type BeforeNextFn = (currentStep: number) => boolean | Promise<boolean>;
export interface MultiStepFormProps {
    currentStep?: number;
    defaultStep?: number;
    onBeforeNext?: BeforeNextFn;
    onStepChange?: (nextStep: number) => void;
    onFinish?: () => void | Promise<void>;
    showHeader?: boolean;
    renderHeader?: (ctx: {
        step: number;
        stepsCount: number;
    }) => React.ReactNode;
    showDefaultActions?: boolean;
    nextLabel?: string;
    prevLabel?: string;
    className?: string;
    children: React.ReactNode;
}
export type MultiStepFormHandle = {
    next: () => void;
    prev: () => void;
    goTo: (index: number) => void;
    getStep: () => number;
};
type StepProps = {
    children: React.ReactNode;
    active?: boolean;
    index?: number;
};
declare function Step({ active, children }: StepProps): import("react/jsx-runtime").JSX.Element | null;
export declare const MultiStepForm: React.ForwardRefExoticComponent<MultiStepFormProps & React.RefAttributes<MultiStepFormHandle>> & {
    Step: typeof Step;
};
export {};
