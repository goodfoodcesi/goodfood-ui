import type { Preview } from "@storybook/react-vite";
import "../src/styles/tailwind.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#f9f9f9" },
        { name: "dark", value: "#121212" },
      ],
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
