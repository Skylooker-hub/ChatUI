import styled, { css } from "styled-components";
import { circle } from "util/mixin";

interface IStyledBadgeProps {
  variant: "dot" | "default";
  show: boolean;
  showZero: boolean;
  count: number;
}

const variants = {
  dot: css<IStyledBadgeProps>`
    position: relative;
    padding: 5px;
    &::after {
      display: ${({ show }) => (show ? "block" : "none")};
      content: "";
      ${({ theme }) => circle(theme.palette.common.red, "6px")}
      position: absolute;
      right: 0;
      top: 0;
    }
  `,
  default: css<IStyledBadgeProps>`
    ${({ theme }) => circle(theme.palette.common.red, "26px")}
    display: ${({ show }) => (show ? "flex" : "none")};
    align-items: center;
    justify-content: center;
    box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.4),
      0px 6px 12px 0px rgba(0, 0, 0, 0.08);
    ${({ showZero, count }) =>
      !showZero && count === 0 && "visibility: hidden;"}
  `,
};

const Count = styled.div`
  font-size: 14px;
  color: #fff;
`;

const StyledBadge = styled.div<IStyledBadgeProps>`
  display: inline-block;
  ${({ variant }) => {
    return variants[variant];
  }};
`;

export { StyledBadge, Count };
