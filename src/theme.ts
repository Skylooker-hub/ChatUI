import { DefaultTheme } from "styled-components";

// 主题色
const theme: DefaultTheme = {
  borderRadius: "6px",
  fontSize: {
    xxsmall: "0.8rem",
    xsmall: "1rem",
    small: "1.2rem",
    normal: "1.4rem",
    medium: "1.6rem",
    large: "1.8rem",
    xlarge: "2rem",
    xxlarge: "2.4rem",
  },
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
      green: "#34D859",
      grey: "rgba(24, 28, 47, 0.2)",
      grey2: "rgba(241, 237, 237, 0.3)",
      grey3: "rgba(24, 28, 47, 0.3)",
      greyDark: "#181C2F",
      red: "#F34848",
      darkPurple: "#292F4C",
    },
    primary: {
      main: "#4F9DDE",
      contrastText: "#ffffff",
    },
    danger: {
      main: "rgb(243, 72, 72)",
      contrastText: "#ffffff",
    }
  },
};

export default theme;
