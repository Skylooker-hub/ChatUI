import React, { Children } from "react";
import { StyledButton } from "./style";

export interface IButtonProps {
  children: React.ReactNode;
  type?: "primary" | "danger";
  shape?: "circle" | "rect";
  size?: string;
  color?: string;
  bgColor?: string;
  [key: string]: any;
}

function Button({
  children,
  type = "primary",
  shape = "circle",
  size = "30px",
  color,
  bgColor,
  ...rest
}: IButtonProps) {
  return (
    <StyledButton color={color} size={size} shape={shape} $type={type} bgColor={bgColor} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
