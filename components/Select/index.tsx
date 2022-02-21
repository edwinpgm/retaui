import React from 'react';
import clsx from 'clsx';

export interface SelectProps extends React.ComponentPropsWithoutRef<'select'> {
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ children, className }) => {
  return (
    <select
      className={clsx(
        'block w-full text-sm bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400',
        className,
      )}
    >
      {children}
    </select>
  );
};
