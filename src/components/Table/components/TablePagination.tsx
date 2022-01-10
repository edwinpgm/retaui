import React from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';
import { Button } from '../../Button';
import { TablePaginationProps } from '../Table.types';

export const TablePagination = <T extends Record<string, unknown>>({
  instance,
}: TablePaginationProps<T>): React.ReactElement | null => {
  const { rows, canPreviousPage, canNextPage, nextPage, previousPage } =
    instance;

  return (
    <div className="py-3 px-2 flex items-center justify-between">
      <div className="flex-1 flex items-center justify-between">
        <span className="text-sm text-gray-600">{rows.length} results</span>

        <nav className="inline-flex gap-x-2.5" aria-label="Pagination">
          <Button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            label="Previous"
            LeftIcon={ChevronLeftIcon}
          />
          <Button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            label="Next"
            RightIcon={ChevronRightIcon}
          />
        </nav>
      </div>
    </div>
  );
};
