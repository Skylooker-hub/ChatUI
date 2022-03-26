import Button from "./Button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ReactComponent as Plus } from "assets/icon/plus.svg";

export default {
  component: Button,
  title: "UI组件/Button",
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>
    <Plus />
  </Button>
);

export const Circle = Template.bind({});

Circle.args = {};

const Template2: ComponentStory<typeof Button> = args => (
  <Button {...args}>示例文本</Button>
);

export const Rect = Template2.bind({});

Rect.args = {
  type: "danger",
  shape: "rect",
};

export const Custom = Template2.bind({});

Custom.args = {
  shape: "rect",
  bgColor: "#292F4C",
  color: "#fff",
};
