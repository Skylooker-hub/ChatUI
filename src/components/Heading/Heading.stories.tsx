import Heading from "./Heading";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Heading,
  title: "排版/Heading",
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = args => (
  <Heading {...args}>示例文本</Heading>
);

export const H1 = Template.bind({});

H1.args = {
  level: 1,
};

export const H2 = Template.bind({});

H2.args = {
  level: 2,
};

export const H3 = Template.bind({});

H3.args = {
  level: 3,
};

export const H4 = Template.bind({});

H4.args = {
  level: 4,
};
