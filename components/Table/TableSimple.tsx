import React from 'react';
import { useTable } from 'react-table';
import { TableProps } from './Table.types';
import { TableBase } from './components';

export const TableSimple = <T extends Record<string, unknown>>({
  columns,
  data,
}: TableProps<T>) => {
  const instance = useTable<T>({
    columns,
    data,
  });

  return (
    <div data-testid="Table-container">
      <TableBase<T> instance={instance} canSort={false} />
    </div>
  );
};
