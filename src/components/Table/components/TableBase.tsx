import React from 'react';
import { TableBaseProps } from '../Table.types';
import { TableBody } from './TableBody';
import { TableHead } from './TableHead';

export const TableBase = <T extends Record<string, unknown>>({
  instance,
  canSort = true,
}: TableBaseProps<T>): React.ReactElement | null => {
  const { getTableProps } = instance;

  return (
    <div className="overflow-x-auto">
      <div className="align-middle inline-block min-w-full">
        <table
          data-testid="Table"
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200"
        >
          <TableHead<T> instance={instance} canSort={canSort} />
          <TableBody<T> instance={instance} />
        </table>
      </div>
    </div>
  );
};
