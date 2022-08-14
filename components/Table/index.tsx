import React from 'react';
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGlobalFilter,
} from 'react-table';
import { TableProps } from './Table.types';
import { TableBase, TablePagination } from './components';

const hooks = [useFilters, useGlobalFilter, useSortBy, usePagination];

export const Table = <T extends Record<string, unknown>>({
  columns,
  data,
  pageSize = 20,
}: TableProps<T>) => {
  const instance = useTable<T>(
    {
      columns,
      data,
      initialState: { pageSize },
    },
    ...hooks,
  );

  return (
    <div data-testid="Table-container">
      {/* <TableFilters<T> instance={instance} /> */}
      <TableBase<T> instance={instance} />
      <TablePagination<T> instance={instance} />
    </div>
  );
};
