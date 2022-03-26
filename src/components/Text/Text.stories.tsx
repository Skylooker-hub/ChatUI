import Text from "./Text";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Text,
  title: "排版/Text",
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => (
  <Text {...args}>示例文本示例文本示例文本</Text>
);

export const Default = Template.bind({});

Default.args = {
};

export const Small = Template.bind({});

Small.args = {
  size: "small"
};

export const Large = Template.bind({});

Large.args = {
  size: "large"
};

export const Bold = Template.bind({});

Bold.args = {
  bold: true,
};

export const Secondary = Template.bind({});

Secondary.args = {
  type: "secondary"
};

export const Danger = Template.bind({});

Danger.args = {
  type: "danger"
};