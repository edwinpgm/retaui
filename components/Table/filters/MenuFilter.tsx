import React, { Fragment, useState, useEffect } from 'react';
import { HeaderGroup } from 'react-table';
import { Menu } from '@headlessui/react';
import { FilterIcon } from '@heroicons/react/solid';
import { Button } from '@components/Button';
import { Checkbox } from '@components/Checkbox';
import { Dropdown } from '@components/Dropdown';

interface MenuItemFilterProps {
  column: HeaderGroup<any>;
}

const MenuItemFilter = ({ column }: MenuItemFilterProps) => {
  const [show, setShow] = useState(Boolean(column.filterValue) || false);

  useEffect(() => {
    if (!show) {
      column.setFilter(undefined);
    }
  }, [show]);

  useEffect(() => {
    if (column.filterValue === undefined) {
      setShow(false);
    }
  }, [column.filterValue]);

  return (
    <div>
      <div className="flex items-center px-3 py-1.5 space-x-2">
        <Checkbox
          onChange={() => setShow(!show)}
          checked={show}
          label={column.Header as string}
        />
      </div>
      {show && (
        <div className="p-3 bg-gray-100">
          <div>{column.render('Filter')}</div>
        </div>
      )}
    </div>
  );
};

const ComponentButton = React.forwardRef(
  (props, ref: React.Ref<HTMLButtonElement>) => {
    return <Button ref={ref} label="Filter" LeftIcon={FilterIcon} {...props} />;
  },
);

ComponentButton.displayName = 'ComponentButton';

interface MenuFilterProps {
  headerGroups: HeaderGroup<any>[];
  clearAllFilters: () => void;
}

export const MenuFilter = ({
  headerGroups,
  clearAllFilters,
}: MenuFilterProps) => {
  return (
    <Dropdown Button={<ComponentButton />}>
      <>
        <div className="flex items-center justify-between px-3 py-2 bg-gray-50">
          <Button label="Clear" onClick={() => clearAllFilters()} />
          <span className="text-gray-700">Filters</span>
          <Menu.Item as={Fragment}>
            <Button label="Done" />
          </Menu.Item>
        </div>
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter && column.canFilter ? (
              <MenuItemFilter key={column.id} column={column} />
            ) : null,
          ),
        )}
      </>
    </Dropdown>
  );
};
