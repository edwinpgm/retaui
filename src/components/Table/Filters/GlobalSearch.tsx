import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

type GlobalSearchProps = {
  globalFilter: string;
  setGlobalFilter: (value: string | undefined) => void;
};

export const GlobalSearch: React.FC<GlobalSearchProps> = ({
  globalFilter,
  setGlobalFilter,
}) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <input
      className="px-2 py-1 rounded-md bg-white border border-gray-300 text-sm focus:border-blue-300 focus:outline focus:outline-2 outline-blue-300 ease-linear duration-100"
      value={value || ''}
      onChange={handleChange}
      placeholder="Search"
    />
  );
};
