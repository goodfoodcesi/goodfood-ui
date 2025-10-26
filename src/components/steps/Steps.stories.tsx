import type { Meta, StoryObj } from "@storybook/react";
import { Steps} from "./Steps" ;

const meta: Meta<typeof Steps> = {
  title: "GoodFood/Steps",
  component: Steps,
  argTypes: {
    // variant: { control: "radio", options: ["solid", "outline"] },
    // color: { control: "radio", options: ["default", "alt", "alt_light"] },
    // price: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  // args: {
  //   children: "Button",
  //   variant: "solid",
  //   color: "default",
  //   className: "w-[311px]",
  // },
};
