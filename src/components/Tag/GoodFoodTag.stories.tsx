import type { Meta, StoryObj } from "@storybook/react";
import { GoodFoodTag } from "./GoodFoodTag";

const meta: Meta<typeof GoodFoodTag> = {
  title: "GoodFood/Tag",
  component: GoodFoodTag,
  argTypes: {
    // variant: { control: "radio", options: ["solid", "outline"] },
    // color: { control: "radio", options: ["default", "alt", "alt_light"] },
    // glow: { control: "boolean" },
    // price: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof GoodFoodTag>;

export const Default: Story = {
  // args: {
  //   children: "Button",
  //   variant: "solid",
  //   color: "default",
  //   glow: false,
  //   className: "w-[311px]"
  // },
  parameters: {
    background: "#1F1F1F"
  }
};







