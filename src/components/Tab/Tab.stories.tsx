import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab, TabProps } from '@components/Tab';

export default {
  title: 'Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const list = [
  {
    id: 0,
    header: 'Tab 1',
    panel: <span>Panel 1</span>,
  },
  {
    id: 1,
    header: 'Tab 2',
    panel: <span>Panel 2</span>,
  },
  {
    id: 2,
    header: 'Tab 3',
    panel: <span>Panel 3</span>,
  },
  {
    id: 3,
    header: 'Tab 4',
    panel: <span>Panel 4</span>,
  },
];

const Template: ComponentStory<typeof Tab> = (args: TabProps) => (
  <Tab {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  list,
};
