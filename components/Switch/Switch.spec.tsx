import React from 'react';
import { render } from '@testing-library/react';
import { Switch } from '.';

describe('Switch', () => {
  test('renders the Switch component', () => {
    render(<Switch onChange={jest.fn} />);
  });

  test('renders the Switch component with checked true', () => {
    render(<Switch onChange={jest.fn} checked={true} />);
  });
});
