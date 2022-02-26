import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectBasic, SelectBasicProps } from '.';

export default {
  title: 'Select Basic',
  component: SelectBasic,
} as ComponentMeta<typeof SelectBasic>;

const Template: ComponentStory<typeof SelectBasic> = (
  args: SelectBasicProps,
) => (
  <SelectBasic {...args}>
    <option value="">Choose option</option>
    <option value="1">Value 1</option>
    <option value="2">Value 2</option>
  </SelectBasic>
);

export const Basic = Template.bind({});
Basic.args = {
  placeholder: 'Something',
};
