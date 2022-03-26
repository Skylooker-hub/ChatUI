import { ITextProps } from "components/Text/Text";
import { StyledParagraph } from "./style";

export type IParagraphProps = {
  ellipsis?: boolean;
  lineClamp?: number;
  [key: string]: any;
} & ITextProps;

function Paragraph({
  ellipsis = false,
  lineClamp = 1,
  children,
  bold = false,
  type = "primary",
  size = "normal",
  ...rest
}: IParagraphProps) {
  return (
    <StyledParagraph
      as="p"
      lineClamp={lineClamp}
      ellipsis={ellipsis}
      bold={bold}
      type={type}
      size={size}
      {...rest}
    >
      {children}
    </StyledParagraph>
  );
}

export default Paragraph;
