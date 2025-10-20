// lib/ui/components/logo.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./logo";

const meta: Meta<typeof Logo> = {
  title: "GoodFood/Logo",
  component: Logo,
  argTypes: {
    variant: { control: "radio", options: ["1", "2", "3", "4"] },
    theme: { control: "radio", options: ["dark", "light"] },
    width: { control: "number" },
    height: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

// Dark variants
export const DarkVariant1: Story = {
  args: {
    variant: "1",
    theme: "dark",
    width: 120,
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#ffffff" }],
    },
  },
};

export const DarkVariant2: Story = {
  args: {
    variant: "2",
    theme: "dark",
    width: 120,
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#ffffff" }],
    },
  },
};

export const DarkVariant3: Story = {
  args: {
    variant: "3",
    theme: "dark",
    width: 120,
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#ffffff" }],
    },
  },
};

export const DarkVariant4: Story = {
  args: {
    variant: "4",
    theme: "dark",
    width: 120,
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: "#ffffff" }],
    },
  },
};

// Light variants
export const LightVariant1: Story = {
  args: {
    variant: "1",
    theme: "light",
    width: 120,
  },
  parameters: {
    backgrounds: {
      default: "custom-dark",
      values: [{ name: "custom-dark", value: "#1f1f1f" }],
    },
  },
};

export const LightVariant2: Story = {
  args: {
    variant: "2",
    theme: "light",
    width: 120,
  },
  parameters: {
    backgrounds: {
      default: "custom-dark",
      values: [{ name: "custom-dark", value: "#1f1f1f" }],
    },
  },
};

export const LightVariant3: Story = {
  args: {
    variant: "3",
    theme: "light",
    width: 120,
  },
  parameters: {
    backgrounds: {
      default: "custom-dark",
      values: [{ name: "custom-dark", value: "#1f1f1f" }],
    },
  },
};

export const LightVariant4: Story = {
  args: {
    variant: "4",
    theme: "light",
    width: 120,
  },
  parameters: {
    backgrounds: {
      default: "custom-dark",
      values: [{ name: "custom-dark", value: "#1f1f1f" }],
    },
  },
};

// Sizes (Dark)
export const SmallDark: Story = {
  args: {
    variant: "1",
    theme: "dark",
    width: 80,
  },
};

export const MediumDark: Story = {
  args: {
    variant: "1",
    theme: "dark",
    width: 120,
  },
};

export const LargeDark: Story = {
  args: {
    variant: "1",
    theme: "dark",
    width: 160,
  },
};

// Sizes (Light)
export const SmallLight: Story = {
  args: {
    variant: "1",
    theme: "light",
    width: 80,
  },
  parameters: {
    backgrounds: {
      default: "custom-dark",
      values: [{ name: "custom-dark", value: "#1f1f1f" }],
    },
  },
};

export const MediumLight: Story = {
  args: {
    variant: "1",
    theme: "light",
    width: 120,
  },
  parameters: {
    backgrounds: {
      default: "custom-dark",
      values: [{ name: "custom-dark", value: "#1f1f1f" }],
    },
  },
};

export const LargeLight: Story = {
  args: {
    variant: "1",
    theme: "light",
    width: 160,
  },
  parameters: {
    backgrounds: {
      default: "custom-dark",
      values: [{ name: "custom-dark", value: "#1f1f1f" }],
    },
  },
};

// Custom dimensions
export const CustomDimensionsDark: Story = {
  args: {
    variant: "1",
    theme: "dark",
    width: 200,
    height: 100,
  },
};

export const CustomDimensionsLight: Story = {
  args: {
    variant: "1",
    theme: "light",
    width: 200,
    height: 100,
  },
  parameters: {
    backgrounds: {
      default: "custom-dark",
      values: [{ name: "custom-dark", value: "#1f1f1f" }],
    },
  },
};