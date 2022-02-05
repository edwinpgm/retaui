import clsx from 'clsx';
import React from 'react';

export type InputProps = React.ComponentPropsWithoutRef<'input'>;

export const Input: React.FC<InputProps> = ({ className, ...restProps }) => {
  return (
    <input
      className={clsx(
        'px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1',
        className,
      )}
      {...restProps}
    />
  );
};
