import React from "react";
import { StyledBadge, Count } from "./style";

interface IProps {
  children?: React.ReactNode;
  show?: boolean;
  showZero?: boolean;
  count?: number;
}

function Badge({
  children,
  show = false,
  showZero = false,
  count = 0,
  ...rest
}: IProps) {
  return (
    <StyledBadge
      variant={children ? "dot" : "default"}
      show={show}
      showZero={showZero}
      count={count}
      {...rest}
    >
      {children || <Count>{count}</Count>}
    </StyledBadge>
  );
}

export default Badge;
