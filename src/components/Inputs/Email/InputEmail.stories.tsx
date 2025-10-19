import type { Meta, StoryObj } from "@storybook/react";
import { InputEmail } from "./InputEmail";

const meta: Meta<typeof InputEmail> = {
  title: "GoodFood/InputEmail",
  component: InputEmail,
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
type Story = StoryObj<typeof InputEmail>;

export const Email: Story = {
  args: {
    label: "Email",
    placeholder: "test@gmail.com",
    className: "w-[311px]",
  },
};
