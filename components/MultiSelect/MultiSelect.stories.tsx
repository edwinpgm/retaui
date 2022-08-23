import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { MultiSelect, MultiSelectProps } from '.';

export default {
  title: 'MultiSelect',
  component: MultiSelect,
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = (
  args: MultiSelectProps,
) => {
  const [, updateArgs] = useArgs();

  const handleChange = (values: (string | number)[]) => {
    updateArgs({ values });
  };

  return <MultiSelect {...args} onChange={handleChange} />;
};

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
};
