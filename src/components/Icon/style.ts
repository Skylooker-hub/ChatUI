import styled from "styled-components";

interface IStyledIconProps {
  color?: string,
  opacity?: number,
}

const StyledIcon = styled.div<IStyledIconProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg,
  svg * {
    ${({ color }) => (color ? `fill: ${color}` : "")};
    ${({ opacity }) => (opacity ? `opacity: ${opacity}` : "")};
  }
`;

export { StyledIcon };
