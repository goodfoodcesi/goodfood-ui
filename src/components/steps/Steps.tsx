import * as React from "react";
import "../../styles/components/steps.css"



type StepStatus = "empty" | "pending" | "passed";

export interface StepsProps {
  currentStep: number;
  steps: number;
}

export interface StepProps {
  status?: StepStatus;
}

export const Steps = ({currentStep, steps}: StepsProps) => {




    return (
        <div>
          <div className="steps-wrapper w-[390px] ">
            <div className="step active"></div>
            <div className="step"></div>
            <div className="step"></div>
            <div className="step"></div>
          </div>
        </div>
    );
};

const Step = ({status}) => {


}

Steps.displayName = "Steps";
