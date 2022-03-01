import styled, { css } from "styled-components";
import { circle } from "util/mixin";

interface IStatusIconProps {
  status: "offline" | "online";
  size: string;
}

interface IAvatarClipProps {
  size: string;
}

const circleMixinFunc = (color: string, size = "8px") => css`
  content: "";
  display: block;
  position: absolute;
  ${circle(color, size)};
`;

const StyledAvatar = styled.div`
  position: relative;
`;

const StatusIcon = styled.div<IStatusIconProps>`
  position: absolute;
  left: 2px;
  top: 4px;

  &::before {
    ${props => circleMixinFunc("#fff", props.size)};
    transform: scale(2);
  }

  &::after {
    ${({ theme, status, size }) => {
      if (status === "online") {
        return circleMixinFunc(theme.palette.common.green, size);
      } else if (status === "offline") {
        return circleMixinFunc(theme.palette.common.grey, size);
      }
    }};
  }
`;

const AvatarClip = styled.div<IAvatarClipProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  overflow: hidden;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export { StyledAvatar, StatusIcon, AvatarClip, AvatarImage };
