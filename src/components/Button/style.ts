import styled, { css } from "styled-components";

export type IStyledButtonProps = {
  //  $开头的属性不会传入dom
  $type: "primary" | "danger";
  shape: "circle" | "rect";
  bgColor?: string;
  color?: string;
  size: string;
};

const shapeVariants = {
  circle: css<IStyledButtonProps>`
    height: ${({ size }) => size};
    width: ${({ size }) => size};
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  `,
  rect: css`
    padding: 12px 18px;
    border-radius: ${({ theme }) => theme.borderRadius};
  `,
};

const typeVariants = {
  primary: css`
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  `,
  danger: css`
    background-color: ${({ theme }) => theme.palette.danger.main};
    color: ${({ theme }) => theme.palette.danger.contrastText};
  `,
};

const StyledButton = styled.button<IStyledButtonProps>`
  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  ${({ shape }) => shapeVariants[shape]};
  ${({ $type }) => typeVariants[$type]};
  background-color: ${({bgColor}) => bgColor};
  color: ${({color}) => color};

  transform: scale(1);
  transition: all 0.4s;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
  }
`;

export { StyledButton };
