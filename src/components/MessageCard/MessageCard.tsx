import Avatar from "components/Avatar/Avatar";
import { Message, MessageText, Name, Status, StyledMessageCard, Time, Unreadbadge } from "./style";

export interface IMessageCardProps {
  avatarSrc: string;
  avatarStatus?: "online" | "offline";
  statusText?: string;
  name?: string;
  time?: string;
  message?: string;
  unreadCount?: number;
  active?: boolean;
  replied?: boolean;
  children: React.ReactNode;
  [key: string]: any;
}

function MessageCard({
  avatarSrc,
  avatarStatus,
  statusText,
  time,
  name,
  message,
  unreadCount,
  replied,
  ...rest
}: IMessageCardProps) {
  return (
    <StyledMessageCard {...rest}>
      <Avatar status={avatarStatus} src={avatarSrc} />
      <Name>{name}</Name>
      <Status>{statusText}</Status>
      <Time>{time}</Time>
      <Message>
        <MessageText>{message}</MessageText>
        <Unreadbadge show={!replied} count={unreadCount} />
      </Message>
    </StyledMessageCard>
  );
}

export default MessageCard;
