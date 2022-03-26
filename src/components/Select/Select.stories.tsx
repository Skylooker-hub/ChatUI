import Select from "./Select";
import { ComponentStory, ComponentMeta } from "@storybook/react";

const { Option } = Select;

export default {
  component: Select,
  title: "UI组件/Input/Select",
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = args => (
  <Select {...args}>
    <Option> 选项1 </Option>
    <Option> 选项2 </Option>
  </Select>
);

export const Default = Template.bind({});

Default.args = {
};
