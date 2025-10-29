import * as React from "react";
type VariantType = "solid" | "outline";
type ColorType = "default" | "alt" | "alt_light";
export declare const GoodFoodButton: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    variant?: VariantType;
    color?: ColorType;
    price?: string;
    children?: React.ReactNode;
} & React.RefAttributes<HTMLButtonElement>>;
export {};
