import React from 'react';
import { render } from '@testing-library/react';
import { Select } from '.';

const options = [
  {
    value: 1,
    label: 'Option 1',
  },
  {
    value: 2,
    label: 'Option 2',
  },
  {
    value: 3,
    label: 'Option 3',
  },
  {
    value: 4,
    label: 'Option 4',
  },
];

describe('Select', () => {
  test('render', () => {
    render(<Select options={options} />);
  });
});
