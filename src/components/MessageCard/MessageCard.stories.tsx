import MessageCard from "./MessageCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: MessageCard,
  title: "UI组件/MessageCard",
} as ComponentMeta<typeof MessageCard>;

const Template: ComponentStory<typeof MessageCard> = args => (
  <MessageCard {...args}></MessageCard>
);

export const Default = Template.bind({});

Default.args = {
};
