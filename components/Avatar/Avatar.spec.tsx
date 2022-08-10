import React from 'react';
import { render } from '@testing-library/react';

import { Avatar } from './';

describe('Avatar', () => {
  test('render Avatar with image', () => {
    render(<Avatar src="https://picsum.photos/200" />);
  });

  test('render Avatar with alt', () => {
    render(<Avatar alt="Ana Celeste" />);
  });

  test('render Avatar with className', () => {
    render(<Avatar alt="Ana Celeste" className="bg-orange-900" />);
  });
});
