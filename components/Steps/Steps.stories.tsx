import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Steps, StepsProps } from '.';

export default {
  title: 'Steps',
  component: Steps,
} as ComponentMeta<typeof Steps>;

const { Step } = Steps;

const Template: ComponentStory<typeof Steps> = (args: StepsProps) => (
  <Steps {...args}>
    <Step title="Title 1" />
    <Step title="Title 2" />
    <Step title="Title 3" />
  </Steps>
);

export const Basic = Template.bind({});
Basic.args = {
  current: 0,
};
