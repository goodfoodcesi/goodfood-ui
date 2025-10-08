import * as React from "react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

type VariantType = "solid" | "outline";
type ColorType = "default" | "alt" | "alt_light";

export interface GoodFoodButtonProps extends React.ComponentProps<"button"> {
  variant?: VariantType;
  color?: ColorType;
  price?: string;
}

export const GoodFoodButton = React.forwardRef<HTMLButtonElement, GoodFoodButtonProps>(
  (
    {
      className,
      variant = "solid",
      color = "default",
      price,
      children,
      ...props
    },
    ref
  ) => {
    const variantClass = `gf-button gf-button--${variant}-${color}`;

    const content = price ? (
      <span className="flex w-full items-center justify-between">
        <span>{children}</span>
        <span className="font-bold">{price}</span>
      </span>
    ) : (
      children
    );

    return (
      <Button ref={ref} className={cn(variantClass, className)} {...props}>
        {content}
      </Button>
    );
  }
);

GoodFoodButton.displayName = "GoodFoodButton";
