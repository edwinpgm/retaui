import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input, InputProps } from './Input';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'First name',
};
