import type { Meta, StoryObj } from "@storybook/react";
import { Steps } from "./Steps";

const meta: Meta<typeof Steps> = {
  title: "GoodFood/Steps",
  component: Steps,
  tags: ["autodocs"],

  argTypes: {
    currentStep: {
      control: { type: "number", min: 1 },
      description: "Étape actuelle (commence à 1)",
      defaultValue: 1,
    },
    steps: {
      control: { type: "number", min: 1, max: 10 },
      description: "Nombre total d’étapes",
      defaultValue: 4,
    },
    // className: {
    //   control: "text",
    //   description: "Classe CSS additionnelle pour le wrapper",
    // },
  },
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  args: {
    currentStep: 2,
    steps: 5,
  },
};

export const WithNumbers: Story = {
  args: {
    currentStep: 3,
    steps: 6,
  },
};

export const Completed: Story = {
  args: {
    currentStep: 7,
    steps: 6,
  },
};
