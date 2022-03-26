import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import theme from "theme";

it("render Button", () => {
  render(
    <ThemeProvider theme={theme}>
      <Button>666</Button>
    </ThemeProvider>
  );
});
