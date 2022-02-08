import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea, TextareaProps } from '.';

export default {
  title: 'Textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args: TextareaProps) => (
  <Textarea {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
