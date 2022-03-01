import { AvatarClip, AvatarImage, StatusIcon, StyledAvatar } from "./style";

interface IProps {
  /** 图片地址 */
  src: string;
  /** 图片大小 */
  size?: string;
  /** 状态 */
  status?: "offline" | "online";
  /** 状态图标大小 */
  statusIconSize?: string;
}

function Avatar({
  src,
  size = "48px",
  status,
  statusIconSize = "8px",
  ...rest
}: IProps) {
  return (
    <StyledAvatar {...rest}>
      {status && (
        <StatusIcon status={status} size={statusIconSize}></StatusIcon>
      )}
      <AvatarClip size={size}>
        <AvatarImage alt="avatar" src={src} />
      </AvatarClip>
    </StyledAvatar>
  );
}

export default Avatar;
