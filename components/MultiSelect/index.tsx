import React, { Fragment } from 'react';
import clsx from 'clsx';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon, XIcon } from '@heroicons/react/solid';
import { Option } from '@components/types';

export interface MultiSelectProps {
  values: (number | string)[];
  options?: Option[];
  placeholder?: string;
  label?: string;
  onChange: (value: (number | string)[]) => void;
}

export const MultiSelect = ({
  values = [],
  options = [],
  placeholder = '',
  label = '',
  onChange,
}: MultiSelectProps) => {
  const valuesSelected = options.filter((option) =>
    values?.includes(option.value),
  );

  const handleSelect = (option: Option[]) => {
    const isAlreadySelected =
      values.findIndex((item: string | number) => {
        return item === option[0].value;
      }) > -1;

    if (isAlreadySelected) {
      onChange(
        values.filter((item: number | string) => item !== option[0].value),
      );
    } else {
      onChange([...values, option[0].value]);
    }
  };

  const isSelected = (selected: Option[], option: Option) => {
    return !!selected.find(
      (selectedItem) => selectedItem.value === option.value,
    );
  };

  return (
    <Listbox value={valuesSelected} onChange={handleSelect}>
      <div className="relative">
        {label && <Listbox.Label>Assignee:</Listbox.Label>}
        <Listbox.Button
          className={clsx(
            'relative w-full py-2 pl-3 pr-10 text-left bg-white cursor-default  text-sm',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500',
            'border border-slate-300',
            'rounded-md shadow-sm',
          )}
        >
          {valuesSelected.length > 0 ? (
            <div className="flex flex-wrap space-x-1">
              {valuesSelected.map((item) => (
                <div
                  key={item.value}
                  className="flex items-center bg-gray-200 py-1 px-2 rounded-sm text-xs"
                >
                  <span className="truncate mr-2">{item?.label}</span>
                  <XIcon
                    className="cursor-pointer h-3 w-3 text-gray-700"
                    onClick={() => handleSelect([item])}
                  />
                </div>
              ))}
            </div>
          ) : (
            <span className="block truncate text-slate-400">{placeholder}</span>
          )}
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
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm">
            {options?.map((option) => (
              <Listbox.Option
                key={option.value}
                className={({ active }) =>
                  `cursor-default select-none relative py-2 pl-10 pr-4 ${
                    active ? 'text-indigo-900 bg-indigo-100' : 'text-gray-900'
                  }`
                }
                value={[option]}
              >
                <>
                  <span
                    className={`block truncate ${
                      isSelected(valuesSelected, option)
                        ? 'font-medium'
                        : 'font-normal'
                    }`}
                  >
                    {option?.label}
                  </span>
                  {isSelected(valuesSelected, option) ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                      <CheckIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
