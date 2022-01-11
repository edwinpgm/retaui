import React from 'react';
import { Switch as SwitchHeadless } from '@headlessui/react';

export type SwitchProps = {
  onChange: (value: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
};

export const Switch: React.FC<SwitchProps> = ({
  onChange,
  checked = false,
  disabled = false,
  ...restProps
}) => {
  return (
    <SwitchHeadless
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      className={`${
        checked ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex items-center h-6 rounded-full w-11`}
      {...restProps}
    >
      <span
        className={`${
          checked ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </SwitchHeadless>
  );
};
