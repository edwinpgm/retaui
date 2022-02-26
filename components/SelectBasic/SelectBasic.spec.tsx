import React from 'react';
import { render } from '@testing-library/react';
import { SelectBasic } from '.';

describe('SelectBasic', () => {
  test('render', () => {
    render(
      <SelectBasic>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
      </SelectBasic>,
    );
  });
});
