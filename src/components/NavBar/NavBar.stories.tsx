import { NavBar } from "./NavBar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: NavBar,
  title: "页面组件/NavBar",
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = args => (
  <NavBar {...args}></NavBar>
);

export const Default = Template.bind({});

Default.args = {};
