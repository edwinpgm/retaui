import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid';
import { TableHeadProps } from '../Table.types';

export const TableHead = <T extends Record<string, unknown>>({
  instance,
  canSort = true,
}: TableHeadProps<T>): React.ReactElement | null => {
  const { headerGroups } = instance;

  return (
    <thead>
      {headerGroups.map((headerGroup, trIndex) => (
        <tr {...headerGroup.getHeaderGroupProps()} key={trIndex}>
          {headerGroup.headers.map((column, columnIndex) => (
            <th
              scope="col"
              className="px-4 py-2.5 text-left whitespace-nowrap"
              {...column.getHeaderProps()}
              key={columnIndex}
            >
              {canSort ? (
                <div {...column.getSortByToggleProps()}>
                  <span className="align-middle inline-block">
                    {column.isSorted && column.isSortedDesc && (
                      <ArrowUpIcon className="h-3.5 w-3.5 text-gray-600" />
                    )}
                    {column.isSorted && !column.isSortedDesc && (
                      <ArrowDownIcon className="h-3.5 w-3.5 text-gray-600" />
                    )}
                    {!column.isSorted && (
                      <ArrowDownIcon className="h-3.5 w-3.5 text-gray-300 hover:text-gray-600" />
                    )}
                  </span>
                  <span className="ml-1 text-xs font-semibold text-gray-800 uppercase">
                    {column.render('Header')}{' '}
                  </span>
                </div>
              ) : (
                <span className="ml-1 text-xs font-semibold text-gray-800 uppercase">
                  {column.render('Header')}{' '}
                </span>
              )}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
