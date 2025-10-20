import { useRef } from "react";
import { Input } from "../../ui/input";
import { cn } from "../../../lib/utils";

export interface InputTextProps extends React.ComponentProps<"input"> {
  label?: string;
}

export function InputText({ className, label, ...props }: InputTextProps) {
  const ref = useRef<HTMLInputElement>(null);
  const baseClasses = "gf-input";

  return (
    <div className="input-wrapper">
      {label && (
        <label
          htmlFor={props.id}
          className="gf-input-text-label text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <Input ref={ref} className={cn(baseClasses, className)} {...props} />
    </div>
  );
}

InputText.displayName = "InputText";