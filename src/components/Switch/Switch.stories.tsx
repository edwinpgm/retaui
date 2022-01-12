import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Switch, SwitchProps } from '@components/Switch';

export default {
  title: 'Switch',
  component: Switch,
  argTypes: {
    onChange: { action: 'onChange' },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args: SwitchProps) => {
  return <Switch {...args} />;
};

const TemplateStateFull: ComponentStory<typeof Switch> = (
  args: SwitchProps,
) => {
  const updateArgs = useArgs()[1];
  const handleChecked = (checked: boolean) => {
    updateArgs({ checked });
  };
  return <Switch {...args} onChange={handleChecked} />;
};

export const Basic = Template.bind({});
Basic.args = {};

export const StateFull = TemplateStateFull.bind({});
Basic.args = {};
