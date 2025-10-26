import type { Meta, StoryObj } from "@storybook/react";
import {InputPassword } from "./InputPassword";

const meta: Meta<typeof InputPassword> = {
  title: "GoodFood/InputPassword",
  component: InputPassword,
  argTypes: {
    label: { control: "text", description: "Texte du label" },
    placeholder: { control: "text", description: "Texte du placeholder" },
    className: { control: "text", description: "Classes Tailwind personnalisées" },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof InputPassword>;

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "*********",
    className: "w-[311px]",
  },
};
