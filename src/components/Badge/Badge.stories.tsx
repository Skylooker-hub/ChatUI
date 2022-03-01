import { ComponentStory, ComponentMeta } from "@storybook/react";
import Badge from "./Badge";
import Avatar from "components/Avatar/Avatar";
import face1 from "assets/images/face-male-1.jpg";

export default {
  component: Badge,
  title: "UI组件/Badge",
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />;

export const Default = Template.bind({});

Default.args = {
  show: true,
  showZero: false,
  count: 99,
};

export const Dot = Template.bind({});

Dot.args = {
  show: true,
  children: <Avatar src={face1} />,
};
