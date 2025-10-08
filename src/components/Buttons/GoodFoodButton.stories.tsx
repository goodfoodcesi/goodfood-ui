import type { Meta, StoryObj } from "@storybook/react";
import { GoodFoodButton } from "./GoodFoodButton";

const meta: Meta<typeof GoodFoodButton> = {
  title: "GoodFood/Button",
  component: GoodFoodButton,
  argTypes: {
    variant: { control: "radio", options: ["solid", "outline"] },
    color: { control: "radio", options: ["default", "alt", "alt_light"] },
    glow: { control: "boolean" },
    price: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof GoodFoodButton>;

export const Solid: Story = {
  args: {
    children: "Button",
    variant: "solid",
    color: "default",
    glow: false,
    className: "w-[311px]"
  },
};

export const SolidAlt: Story = {
  args: {
    children: "Button",
    variant: "solid",
    color: "alt",
    glow: false,
    className: "w-[311px]",
  },
  parameters: {
    backgrounds: {
      default: "custom-dark",
      values: [{ name: "custom-dark", value: "#1f1f1f" }],
    },
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    variant: "outline",
    color: "default",
    glow: false,
    className: "w-[311px]",
  },
};

export const OutlineAlt: Story = {
  args: {
    children: "Button",
    variant: "outline",
    color: "alt",
    className: "w-[311px]",
  },
  parameters: {
    backgrounds: {
      default: "custom-dark",
      values: [{ name: "custom-dark", value: "#1f1f1f" }],
    },
  },
};

export const WithPrice: Story = {
  args: {
    children: "Commander",
    variant: "solid",
    color: "alt",
    price: "12€",
    className: "w-[311px]"
  },
};
