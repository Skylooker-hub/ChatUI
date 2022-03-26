import Badge from "components/Badge/Badge";
import Paragraph from "components/Paragraph/Paragraph";
import styled from "styled-components";
import Text from "../Text/Text";

const Name = styled(Text).attrs({ size: "large" })``;

const Time = styled(Text).attrs({ size: "medium", type: "secondary" })``;

const Status = styled(Text).attrs({ type: "secondary" })``;

const Message = styled.div``;

const MessageText = styled(Paragraph).attrs({ ellipsis: true })``;

const Unreadbadge = styled(Badge)``;

const StyledMessageCard = styled.div``;

export { StyledMessageCard, Name, Time, Status, Message, MessageText, Unreadbadge };
