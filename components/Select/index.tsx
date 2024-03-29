import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Option } from '@components/types';

export interface SelectProps {
  options: Option[];
  placeholder?: string;
  className?: string;
}

export const Select = ({
  options = [],
  placeholder,
  className,
}: SelectProps) => {
  const [selected, setSelected] = useState<Option>();

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className={clsx('relative', className)}>
        <Listbox.Button
          className={clsx(
            'relative w-full py-2 pl-3 pr-10 text-left bg-white cursor-default  text-sm',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500',
            'border border-slate-300',
            'rounded-md shadow-sm',
          )}
        >
          {!selected && (
            <span className="block truncate text-slate-400">{placeholder}</span>
          )}
          <span className="block truncate">{selected?.label}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((option) => (
              <Listbox.Option
                key={option.value}
                className={({ active }) =>
                  `cursor-default select-none relative py-2 pl-10 pr-4 ${
                    active ? 'text-indigo-900 bg-indigo-100' : 'text-gray-900'
                  }`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate text-sm ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {option?.label}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
