import { MenuItem } from "./NavBar";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
// 通过babel-plugin-macros  css属性将转换为styled-components 组件
import 'styled-components/macro';
import { DefaultTheme } from "styled-components/macro";

export default {
  component: MenuItem,
  title: "页面组件/MenuItem",
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = args => (
  <div css={` background-color: ${({ theme }: {theme: DefaultTheme}) => theme.palette.common.darkPurple}; width: 100px`}>
    <MenuItem {...args}></MenuItem>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  active: true,
  icon: faCommentDots,
  showBadge: true,
};