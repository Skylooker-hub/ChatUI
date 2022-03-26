import React from "react";
import { StyledBadge, Count } from "./style";

interface IProps {
  /** 子组件 */
  children?: React.ReactNode;
  /** 是否展示 */
  show?: boolean;
  /** 数字为零时是否展示 */
  showZero?: boolean;
  /** 是否为展示数字 */
  count?: number;
  [key: string]: any;
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
