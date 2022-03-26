import { render, screen } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { ThemeProvider } from "styled-components";
import theme from "theme";

it("render NavBar", () => {
  render(
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
});
