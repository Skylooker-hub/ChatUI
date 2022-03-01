import Icon from "./Icon";
import { ReactComponent as SmileIcon } from "assets/icon/smile.svg";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Icon,
  title: "UI组件/Icon",
}as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: SmileIcon,
};

export const Opacity = Template.bind({});

Opacity.args = {
  ...Default.args,
  opacity: 0.8,
};

export const Size = Template.bind({});

Size.args = {
  ...Default.args,
  width: 60,
  height: 60,
};

export const Color = Template.bind({});

Color.args = {
  ...Default.args,
  color: "#e22",
};
