import Input from "./Input";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "components/Icon/Icon";
import { ReactComponent as SearchIcon } from "assets/icon/search.svg";
import { ReactComponent as SmileIcon } from "assets/icon/smile.svg";

export default {
  component: Input,
  title: "UI组件/Input",
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => (
  <Input {...args}></Input>
);

export const Default = Template.bind({});

Default.args = {};

export const SearchInput: ComponentStory<typeof Input.Search> = args => (
  <Input.Search {...args}></Input.Search>
);

export const Prefix = Template.bind({});

Prefix.args = {
  prefix: <Icon icon={SearchIcon}></Icon>,
  suffix: <Icon icon={SmileIcon}></Icon>,
};
