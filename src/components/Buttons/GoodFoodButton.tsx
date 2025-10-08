import * as React from "react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

type VariantType = "solid" | "outline";
type ColorType = "default" | "alt" | "alt_light";

export interface GoodFoodButtonProps extends React.ComponentProps<"button"> {
  variant?: VariantType;
  color?: ColorType;
  glow?: boolean;
  price?: string;
}

export const GoodFoodButton = React.forwardRef<HTMLButtonElement, GoodFoodButtonProps>(
  (
    {
      className,
      variant = "solid",
      color = "default",
      glow = false,
      price,
      children,
      ...props
    },
    ref
  ) => {
    // === Base style commun à tous les boutons ===
    const base =
      "font-semibold rounded-[8px] tracking-wide px-[10px] py-[12px] text-base transition-all duration-200 flex items-center justify-center gap-2";

    // === Sélecteur typé de classes ===
    const getVariantClass = (variant: VariantType, color: ColorType) => {
      if (variant === "solid") {
        const solid: Record<ColorType, string> = {
          default:
            "bg-[var(--button-bg-default)] text-[var(--button-text-default)] hover:bg-[var(--yellow-600)]",
          alt: "bg-[var(--button-bg-alt)] text-[var(--button-text-alt)] hover:opacity-90",
          alt_light:
            "bg-[var(--button-bg-alt-light)] text-[var(--button-text-default)] hover:brightness-95",
        };
        return solid[color];
      }

      // sinon => outline
      const outline: Record<Exclude<ColorType, "alt_light">, string> = {
        default:
          "border border-[var(--button-text-default)] text-[var(--button-text-default)] bg-transparent hover:bg-[var(--button-text-default)]/5",
        alt: "border border-[var(--button-text-alt)] text-[var(--button-text-alt)] bg-transparent hover:bg-[var(--button-text-alt)]/10",
      };

      // On restreint color à ceux valides pour outline
      return outline[color as keyof typeof outline];
    };

    const variantClass = getVariantClass(variant, color);

    // === Gestion du contenu (avec ou sans prix) ===
    const content = price ? (
      <span className="flex w-full items-center justify-between">
        <span>{children}</span>
        <span className="font-bold">{price}</span>
      </span>
    ) : (
      children
    );

    return (
      <Button
        ref={ref}
        className={cn(
          base,
          variantClass,
          className
        )}
        {...props}
      >
        {content}
      </Button>
    );
  }
);

GoodFoodButton.displayName = "GoodFoodButton";
