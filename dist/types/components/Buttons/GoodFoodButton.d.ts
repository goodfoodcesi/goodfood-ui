import * as React from "react";
type VariantType = "solid" | "outline";
type ColorType = "default" | "alt" | "alt_light";
export interface GoodFoodButtonProps extends React.ComponentProps<"button"> {
    variant?: VariantType;
    color?: ColorType;
    price?: string;
    children?: React.ReactNode;
}
export declare const GoodFoodButton: React.ForwardRefExoticComponent<Omit<GoodFoodButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export {};
