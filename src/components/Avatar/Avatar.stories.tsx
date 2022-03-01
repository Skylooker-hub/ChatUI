import Avatar from "./Avatar";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import face1 from "assets/images/face-male-1.jpg";

export default {
  component: Avatar,
  title: "UI组件/Avatar",
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = args => (
  <Avatar {...args}></Avatar>
);

export const Default = Template.bind({});

Default.args = {
  src: face1,
};

export const Large = Template.bind({});

Large.args = {
  ...Default.args,
  size: "72px",
  statusIconSize: "12px",
  status: "online",
};

export const Online = Template.bind({});
Online.args = {
  ...Default.args,
  status: "online",
};

export const Offline = Template.bind({});
Offline.args = {
  ...Default.args,
  status: "offline",
};
