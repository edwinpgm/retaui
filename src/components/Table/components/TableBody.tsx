import React from 'react';
import { TableBodyProps } from '../Table.types';

export const TableBody = <T extends Record<string, unknown>>({
  instance,
}: TableBodyProps<T>): React.ReactElement | null => {
  const { getTableBodyProps, prepareRow, rows } = instance;

  return (
    <tbody
      {...getTableBodyProps()}
      className="bg-white divide-y divide-gray-100"
    >
      {rows.map((row, rowIndex) => {
        prepareRow(row);
        return (
          <tr
            {...row.getRowProps()}
            className="hover:bg-gray-50"
            key={rowIndex}
          >
            {row.cells.map((cell, cellIndex) => {
              return (
                <td
                  {...cell.getCellProps()}
                  key={cellIndex}
                  className="px-4 py-3.5 whitespace-nowrap text-sm text-gray-800"
                >
                  {cell.render('Cell')}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};
