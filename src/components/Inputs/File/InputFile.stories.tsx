import type { Meta, StoryObj } from "@storybook/react";
import { InputFile } from "./InputFile";

const meta: Meta<typeof InputFile> = {
  title: "GoodFood/InputFile",
  component: InputFile,
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
type Story = StoryObj<typeof InputFile>;

export const File: Story = {
  args: {
    label: "File",
    placeholder: "test@gmail.com",
    className: "w-[311px]",
  },
};
