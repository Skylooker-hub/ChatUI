import Paragraph from "./Paragraph";
import "styled-components/macro";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: Paragraph,
  title: "排版/Paragraph",
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = args => (
  <>
    <Paragraph {...args}> 示例文本 </Paragraph>
    <Paragraph {...args}> 示例文本 </Paragraph>
  </>
);

export const Default = Template.bind({});

Default.args = {};

const Template2: ComponentStory<typeof Paragraph> = args => (
  <>
    <Paragraph {...args}>
      示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本示例文本
    </Paragraph>
  </>
);

export const Ellipsis = Template2.bind({});

Ellipsis.args = {
  ellipsis: true,
  lineClamp: 1,
};
