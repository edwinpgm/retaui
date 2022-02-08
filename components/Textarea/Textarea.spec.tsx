import React from 'react';
import { render } from '@testing-library/react';
import { Textarea } from '.';

describe('Textarea', () => {
  test('render', () => {
    render(<Textarea />);
  });
});
