import { render, screen } from "@testing-library/react";
import Text from "./Text";
import { ThemeProvider } from "styled-components";
import theme from "theme";

it("render Text", () => {
  render(
    <ThemeProvider theme={theme}>
      <Text bold>666</Text>
    </ThemeProvider>
  );
});
