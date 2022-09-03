import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from '.';

describe('Modal', () => {
  test('render', () => {
    render(<Modal isOpen={true} onClose={jest.fn()} />);
  });
});
