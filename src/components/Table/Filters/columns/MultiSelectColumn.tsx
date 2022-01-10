import React, { useState, useEffect } from 'react';
import { FilterProps, FilterValue, IdType, Row } from 'react-table';
import { Checkbox } from '@components/Checkbox';

export const filterMultiSelect = (
  rows: Array<Row<any>>,
  id: Array<IdType<any>>,
  filterValue: FilterValue,
) => {
  return rows.filter((row) => {
    const rowValue = row.values[id[0]];
    return filterValue.includes(rowValue);
  });
};

export const MultiSelectColumnFilter = <T extends Record<string, unknown>>({
  column: { setFilter, preFilteredRows, id, filterValue = [] },
}: FilterProps<T>) => {
  const [selectedOptions, setSelectedOptions] = useState(filterValue);
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(
        selectedOptions.filter((item: string) => item !== value),
      );
    } else {
      setSelectedOptions([...selectedOptions, e.target.value]);
    }
  };

  useEffect(() => {
    if (selectedOptions.length === 0) {
      setFilter(undefined);
    } else {
      setFilter(selectedOptions);
    }
  }, [selectedOptions]);

  return (
    <>
      {options.map((option) => (
        <div className="flex" key={option as string}>
          <Checkbox
            key={option as string}
            label={option as string}
            value={option as string}
            onChange={handleChange}
            checked={selectedOptions.includes(option)}
          />
        </div>
      ))}
    </>
  );
};
