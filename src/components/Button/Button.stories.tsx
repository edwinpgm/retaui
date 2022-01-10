import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArrowDownIcon } from '@heroicons/react/solid';
import { Button, ButtonProps } from '@components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Button',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  label: 'Button',
  LeftIcon: ArrowDownIcon,
};

export const RightButton = Template.bind({});
RightButton.args = {
  label: 'Button',
  RightIcon: ArrowDownIcon,
};

export const LeftRightButton = Template.bind({});
LeftRightButton.args = {
  label: 'Button',
  LeftIcon: ArrowDownIcon,
  RightIcon: ArrowDownIcon,
};
