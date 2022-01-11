import React from 'react';
import { render } from '@testing-library/react';

import { Tab } from './Tab';

const list = [
  {
    id: 1,
    header: 'Tab 1',
    panel: 'Panel 1',
  },
  {
    id: 2,
    header: 'Tab 2',
    panel: 'Panel 2',
  },
];

describe('Tab', () => {
  test('renders the Tab component', () => {
    render(<Tab list={list} />);
  });
});
