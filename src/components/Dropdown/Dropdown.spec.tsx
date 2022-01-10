import React from 'react';
import { render } from '@testing-library/react';

import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  test('renders the Dropdown component', () => {
    render(
      <Dropdown Button={<button>Show</button>}>
        Example Dropdown component
      </Dropdown>,
    );
  });
});
