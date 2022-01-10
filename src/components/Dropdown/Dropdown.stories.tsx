import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown, DropdownProps } from '@components/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args: DropdownProps) => (
  <Dropdown {...args}>Dropdown list</Dropdown>
);

export const Basic = Template.bind({});
Basic.args = {
  Button: <button>Show more</button>,
};

export const RightPosition = Template.bind({});
RightPosition.args = {
  Button: <button>Show more</button>,
  position: 'right',
};
