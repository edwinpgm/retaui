import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  PlusIcon,
} from '@heroicons/react/solid';
import { Button, ButtonProps, ButtonSize, ButtonType } from '.';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <div className="space-y-3">
    <Button
      {...args}
      size={ButtonSize.Middle}
      type={ButtonType.Primary}
      RightIcon={ArrowRightIcon}
    />
    <Button {...args} size={ButtonSize.Middle} type={ButtonType.Default} />
    <Button {...args} size={ButtonSize.Small} />
    <Button
      {...args}
      size={ButtonSize.Small}
      className="inline"
      type={ButtonType.Primary}
      LeftIcon={PlusIcon}
    />
    <Button {...args} size={ButtonSize.Middle} />
    <Button {...args} size={ButtonSize.Large} />
  </div>
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
