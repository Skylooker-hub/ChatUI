import React from "react";
import { StyledText } from "./style";

export interface ITextProps {
  children: React.ReactNode;
  type?: "primary" | "danger" | "secondary";
  size?:
    | "xxsmall"
    | "xsmall"
    | "small"
    | "normal"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge";
  bold?: boolean;
  [key: string]: any;
}

function Text({
  children,
  type = "primary",
  size = "normal",
  bold = false,
  ...rest
}: ITextProps) {
  return (
    <StyledText type={type} size={size} bold={bold} {...rest}>
      {children}
    </StyledText>
  );
}

export default Text;
