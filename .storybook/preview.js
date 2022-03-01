import { ThemeProvider } from "styled-components";
import { addDecorator, addParameters } from "@storybook/react";
import theme from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

addParameters({
  options: {
    showRoot: true,
  },
});
