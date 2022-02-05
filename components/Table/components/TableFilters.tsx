import React from 'react';
import { TableFiltersProps } from '../Table.types';
import { GlobalSearch, MenuFilter } from '../filters';

export const TableFilters = <T extends Record<string, unknown>>({
  instance,
}: TableFiltersProps<T>): React.ReactElement | null => {
  const { headerGroups, state, setGlobalFilter, setAllFilters } = instance;
  const clearAllFilters = () => setAllFilters([]);

  return (
    <header className="flex space-x-2">
      <GlobalSearch
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <MenuFilter
        headerGroups={headerGroups}
        clearAllFilters={clearAllFilters}
      />
    </header>
  );
};
