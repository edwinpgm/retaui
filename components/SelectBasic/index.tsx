import React from 'react';
import clsx from 'clsx';

export interface SelectBasicProps
  extends React.ComponentPropsWithoutRef<'select'> {
  className?: string;
}

export const SelectBasic: React.FC<SelectBasicProps> = ({
  children,
  className = '',
}) => {
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
