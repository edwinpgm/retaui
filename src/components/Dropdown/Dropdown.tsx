import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';

export type DropdownProps = {
  Button: React.ReactElement;
  position?: 'left' | 'right';
};

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  Button,
  position = 'left',
}) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button as={Fragment}>{Button}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items as={Fragment}>
          <div
            className={clsx(
              'absolute w-56 mt-2',
              position === 'right'
                ? 'right-0 origin-top-right'
                : 'left-0 origin-top-left',
              'bg-white divide-y divide-gray-100 rounded-md',
              'shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
            )}
          >
            {children}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
