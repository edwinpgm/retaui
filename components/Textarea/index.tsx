import React from 'react';
import clsx from 'clsx';

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<'textarea'> {
  rows?: number;
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  children,
  rows = 5,
  className,
  ...restProps
}) => {
  return (
    <textarea
      rows={rows}
      className={clsx(
        'px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 block w-full rounded-md text-sm',
        'focus:ring-1 focus:outline-none focus:border-sky-500 focus:ring-sky-500',
        className,
      )}
      {...restProps}
    >
      {children}
    </textarea>
  );
};
