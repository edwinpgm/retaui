import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Autocomplete, AutocompleteProps } from '.';

export default {
  title: 'Autocomplete',
  component: Autocomplete,
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (
  args: AutocompleteProps,
) => <Autocomplete {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  options: [
    {
      value: '1',
      label: 'Option 1',
    },
    {
      value: '2',
      label: 'Option 2',
    },
    {
      value: '3',
      label: 'Option 3',
    },
    {
      value: '4',
      label: 'Option 4',
    },
    {
      value: '5',
      label: 'Option 5',
    },
  ],
  placeholder: 'Choose on option',
  emptyText: 'Not results',
};
