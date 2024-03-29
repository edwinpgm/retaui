import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { build, fake, oneOf } from '@jackfranklin/test-data-bot';

import { Table } from '.';
import {
  filterMultiSelect,
  MultiSelectColumnFilter,
} from './filters/columns/MultiSelectColumn';

export default {
  title: 'Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const dataBuilder = build('Data', {
  fields: {
    firstName: fake((f) => f.name.firstName()),
    lastName: fake((f) => f.name.lastName()),
    status: oneOf('Active', 'Canceled', 'Pending', 'Processing'),
  },
});

const data = Array(10)
  .fill(undefined)
  .map(() => dataBuilder());

const columns = [
  {
    Header: 'First Name',
    accessor: 'firstName' as const,
  },
  {
    Header: 'Last Name',
    accessor: 'lastName' as const,
    disableFilters: true,
  },
  {
    Header: 'Status',
    accessor: 'status' as const,
    Filter: MultiSelectColumnFilter,
    filter: filterMultiSelect,
  },
];

export const Base: ComponentStory<typeof Table> = (args) => {
  return <Table {...args} />;
};

Base.args = {
  columns,
  data,
};
