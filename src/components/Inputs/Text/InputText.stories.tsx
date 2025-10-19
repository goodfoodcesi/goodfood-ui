import type { Meta, StoryObj } from "@storybook/react";
import { InputText } from "./InputText";

const meta: Meta<typeof InputText> = {
  title: "GoodFood/InputText",
  component: InputText,
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
type Story = StoryObj<typeof InputText>;

export const Text: Story = {
  args: {
    label: "Nom",
    placeholder: "Entrez votre nom",
    className: "w-[311px]",
  },
};
