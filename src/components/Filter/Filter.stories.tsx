import Filter from "./Filter";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "components/Select/Select";
import Button from "components/Button/Button";
import Icon from "components/Icon/Icon";
import { ReactComponent as Plus } from 'assets/icon/plus.svg';

const { Filters, Action } = Filter;

const { Option } = Select;

export default {
  component: Filter,
  title: "页面组件/Filter",
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = args => (
  <Filter {...args}>
    <Filters label="列表排序">
      <Select>
        <Option>最新消息优先</Option>
        <Option>在线好友优先</Option>
      </Select>
    </Filters>
    <Action label="创建会话">
      <Button>
        <Icon icon={Plus} width={12} height={12}></Icon>
      </Button>
    </Action>
  </Filter>
);

export const Default = Template.bind({});

Default.args = {};
