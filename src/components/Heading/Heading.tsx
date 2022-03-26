import React from "react";
import { StyledHeading } from "./style";

export interface IHeadProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  [key: string]: any;
}

function Heading({ children, level, ...rest }: IHeadProps) {
  return <StyledHeading as={`h${level}`} {...rest}>{children}</StyledHeading>;
}

export default Heading;
