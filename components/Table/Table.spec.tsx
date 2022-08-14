import React from 'react';
import { render } from '@testing-library/react';

import { Table } from '.';

const data = [
  {
    id: 1,
    firstName: 'Ed',
  },
];

const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName' as const,
  },
];

describe('Table', () => {
  it('should render a Table', () => {
    render(<Table columns={columns} data={data} />);
  });
});
