import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select, SelectProps } from '.';

export default {
  title: 'Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: SelectProps) => (
  <Select {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Select something',
};
