import { render, screen } from "@testing-library/react";
import Paragraph from "./Paragraph";
import { ThemeProvider } from "styled-components";
import theme from "theme";

it("render Paragraph", () => {
  render(
    <ThemeProvider theme={theme}>
      <Paragraph>666</Paragraph>
    </ThemeProvider>
  );
});
