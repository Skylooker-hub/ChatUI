// styled.d.ts
import "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    fontSize: {
      xxsmall: string;
      xsmall: string;
      small: string;
      normal: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    palette: {
      common: {
        black: string;
        white: string;
        green: string;
        grey: string;
        grey2: string;
        grey3: string;
        greyDark: string;
        red: string;
        darkPurple: string;
      };
      primary: IPalette;
      danger: IPalette;
    };
  }
}
