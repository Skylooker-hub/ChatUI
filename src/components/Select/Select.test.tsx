import { render, screen } from "@testing-library/react";
import Select from "./Select";
import { ThemeProvider } from "styled-components";
import theme from "theme";

const { Option } = Select;

it("render Select", () => {
  render(
    <ThemeProvider theme={theme}>
      <Select>
        <Option>666</Option>
      </Select>
    </ThemeProvider>
  );
});
