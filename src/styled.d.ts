// styled.d.ts
import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
        green: string;
        grey: string;
        red: string;
      };
      primary: IPalette;
      secondary?: IPalette;
    };
  }
}
