import React from 'react';
import { render } from '@testing-library/react';
import { SideNav } from '.';

describe('SideNav', () => {
  test('render', () => {
    render(<SideNav />);
  });
});
