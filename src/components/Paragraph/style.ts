import { IStyledTextProps, StyledText } from "components/Text/style";
import styled, { css } from "styled-components";

export type IStyledParagraphProps = {
  ellipsis: boolean;
  lineClamp: number;
} & IStyledTextProps;

const StyledParagraph = styled(StyledText)<IStyledParagraphProps>`
  ${({ ellipsis, lineClamp }) =>
    ellipsis &&
    css`
      /* text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden; */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: ${lineClamp};
    `};
    /* text-indent: 2em; */
`;

export { StyledParagraph };
