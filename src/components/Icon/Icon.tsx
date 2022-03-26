import { FunctionComponent, SVGProps } from "react";
import { StyledIcon } from "./style";

interface IProps {
  icon: FunctionComponent<
    SVGProps<SVGSVGElement>
  >;
  width?: number | string;
  height?: number | string;
  color?: string;
  opacity?: number;
  [key: string]: any;
}

function Icon({
  icon: IconComponent,
  width = 24,
  height = 24,
  color,
  opacity,
  ...rest
}: IProps) {
  return (
    <StyledIcon color={color} opacity={opacity} {...rest}>
      {IconComponent && <IconComponent width={width} height={height} />}
    </StyledIcon>
  );
}

export default Icon;
