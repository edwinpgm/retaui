import React from 'react';

export type CheckboxProps = {
  label: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...restProps }) => {
  return (
    <label>
      <input
        type="checkbox"
        className="rounded border-gray-300"
        {...restProps}
      />
      <span className="ml-2 text-sm text-gray-700">{label}</span>
    </label>
  );
};
