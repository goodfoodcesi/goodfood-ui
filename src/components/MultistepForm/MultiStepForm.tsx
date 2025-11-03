import React, {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Steps } from "../steps/Steps";
import { GoodFoodButton } from "../Buttons/GoodFoodButton";

type MultiStepContextValue = {
  step: number;
  stepsCount: number;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
};

const MultiStepCtx = createContext<MultiStepContextValue | null>(null);

export function useMultiStep() {
  const ctx = useContext(MultiStepCtx);
  if (!ctx)
    throw new Error("useMultiStep must be used within <MultiStepForm />");
  return ctx;
}

export type BeforeNextFn = (currentStep: number) => boolean | Promise<boolean>;

export interface MultiStepFormProps {
  currentStep?: number;
  defaultStep?: number;
  onBeforeNext?: BeforeNextFn;
  onStepChange?: (nextStep: number) => void;
  onFinish?: () => void | Promise<void>;
  showHeader?: boolean;
  renderHeader?: (ctx: { step: number; stepsCount: number }) => React.ReactNode;
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

/* -------------------------------------------------------------------------- */
/*                           Composant principal                              */
/* -------------------------------------------------------------------------- */

const MultiStepFormBase = forwardRef<MultiStepFormHandle, MultiStepFormProps>(
  (
    {
      currentStep,
      defaultStep = 0,
      onBeforeNext,
      onStepChange,
      onFinish,
      showHeader = true,
      renderHeader,
      showDefaultActions = true,
      prevLabel = "Précédent",
      className,
      children,
    },
    ref
  ) => {
    const controlled = typeof currentStep === "number";
    const [internal, setInternal] = useState(defaultStep);
    const step = controlled ? (currentStep as number) : internal;

    const stepsArray = useMemo(() => Children.toArray(children), [children]);
    const stepsCount = stepsArray.length;

    const setStep = useCallback(
      (next: number) => {
        const bounded = Math.max(0, Math.min(next, stepsCount - 1));
        if (!controlled) setInternal(bounded);
        onStepChange?.(bounded);
      },
      [controlled, stepsCount, onStepChange]
    );

    const next = useCallback(async () => {
      if (onBeforeNext) {
        const ok = await onBeforeNext(step);
        if (!ok) return;
      }
      if (step >= stepsCount - 1) {
        setStep(stepsCount);
        await onFinish?.();
        return;
      }
      setStep(step + 1);
    }, [onBeforeNext, onFinish, setStep, step, stepsCount]);

    const prev = useCallback(() => setStep(step - 1), [setStep, step]);
    const goTo = useCallback((index: number) => setStep(index), [setStep]);

    useImperativeHandle(
      ref,
      (): MultiStepFormHandle => ({ next, prev, goTo, getStep: () => step }),
      [next, prev, goTo, step]
    );

    const ctxValue = useMemo(
      () => ({ step, stepsCount, next, prev, goTo }),
      [step, stepsCount, next, prev, goTo]
    );

    return (
      <MultiStepCtx.Provider value={ctxValue}>
        <div className={className}>
          {showHeader && (
            <div className="mb-4 space-y-3">
              {/* Steps toujours visibles si showHeader = true */}
              <Steps currentStep={step + 1} steps={stepsCount} />
              {/* Si tu fournis un header custom, il s’ajoute juste en dessous */}
              {renderHeader && renderHeader({ step, stepsCount })}
            </div>
          )}

          {/* Transition entre les étapes */}
          <div className="relative min-h-[200px]">
            {stepsArray.map((child, i) =>
              isValidElement(child) ? (
                <div
                  key={i}
                  className={`transition-all duration-500 ease-in-out ${
                    i === step
                      ? "opacity-100 translate-x-0 relative"
                      : "opacity-0 translate-x-10 absolute pointer-events-none"
                  }`}
                >
                  {cloneElement(child as React.ReactElement<any>, {
                    active: i === step,
                  })}
                </div>
              ) : null
            )}
          </div>

          {showDefaultActions && (
            <div className="mt-6 flex items-center justify-between gap-4">
              <GoodFoodButton
                type="button"
                variant="outline"
                color="default"
                onClick={prev}
                disabled={step === 0}
                className="flex-1"
              >
                {prevLabel}
              </GoodFoodButton>

              {step === stepsCount - 1 ? (
                <GoodFoodButton
                  type="button"
                  variant="solid"
                  color="default"
                  onClick={next}
                  className="flex-1"
                >
                  Terminer
                </GoodFoodButton>
              ) : (
                <GoodFoodButton
                  type="button"
                  variant="solid"
                  color="alt"
                  onClick={next}
                  className="flex-1"
                >
                  Suivant
                </GoodFoodButton>
              )}
            </div>
          )}
        </div>
      </MultiStepCtx.Provider>
    );
  }
);
MultiStepFormBase.displayName = "MultiStepForm";

/* -------------------------------------------------------------------------- */
/*                             Sous-composants                                */
/* -------------------------------------------------------------------------- */

type StepProps = {
  children: React.ReactNode;
  active?: boolean;
  index?: number;
};

function Step({ active, children }: StepProps) {
  if (!active) return null;
  return <div className="space-y-4">{children}</div>;
}

/* -------------------------------------------------------------------------- */
/*                   Fusion propre + typage complet 🎯                        */
/* -------------------------------------------------------------------------- */

export const MultiStepForm = Object.assign(MultiStepFormBase, {
  Step,
});
