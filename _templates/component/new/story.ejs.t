---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---
import <%= name %> from "./<%= name %>";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  component: <%= name %>,
  title: "UI组件/<%= name %>",
} as ComponentMeta<typeof <%= name %>>;

const Template: ComponentStory<typeof <%= name %>> = args => (
  <<%= name %> {...args}></<%= name %>>
);

export const Default = Template.bind({});

Default.args = {
};
