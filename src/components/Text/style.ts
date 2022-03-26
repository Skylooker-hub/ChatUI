import styled, { css } from "styled-components";

export interface IStyledTextProps {
  children: React.ReactNode;
  type: "primary" | "danger" | "secondary";
  size:
    | "xxsmall"
    | "xsmall"
    | "small"
    | "normal"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge";
  bold: boolean;
}

const typeVariants = {
  primary: css`
    color: ${({ theme }) => theme.palette.common.greyDark};
  `,
  secondary: css`
    color: ${({ theme }) => theme.palette.common.greyDark};
    opacity: 0.3;
  `,
  danger: css`
    color: ${({ theme }) => theme.palette.common.red};
  `,
};

const sizeVariants = {
  xxsmall: css`
    ${({ theme }) => theme.fontSize.xxsmall}
  `,
  xsmall: css`
    ${({ theme }) => theme.fontSize.xsmall}
  `,
  small: css`
    ${({ theme }) => theme.fontSize.small}
  `,
  normal: css`
    ${({ theme }) => theme.fontSize.normal}
  `,
  medium: css`
    ${({ theme }) => theme.fontSize.medium}
  `,
  large: css`
    ${({ theme }) => theme.fontSize.large}
  `,
  xlarge: css`
    ${({ theme }) => theme.fontSize.xlarge}
  `,
  xxlarge: css`
    ${({ theme }) => theme.fontSize.xxlarge}
  `,
};

const StyledText = styled.span<IStyledTextProps>`
  font-size: ${({ size }) => sizeVariants[size] || sizeVariants.normal};
  ${({ type }) => typeVariants[type] || typeVariants.primary};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `}
`;

export { StyledText };
