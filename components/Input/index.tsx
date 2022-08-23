import React from 'react';
import clsx from 'clsx';

export type InputProps = {
  label?: string;
  classNameInput?: string;
} & React.ComponentPropsWithoutRef<'input'>;

export const Input: React.FC<InputProps> = ({
  className,
  classNameInput,
  label,
  ...restProps
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="mb-1 inline-block text-sm font-semibold">
          {label}
        </label>
      )}
      <input
        className={clsx(
          'px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-sm focus:ring-1',
          classNameInput,
        )}
        {...restProps}
      />
    </div>
  );
};
