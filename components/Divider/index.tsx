import clsx from 'clsx';
import React from 'react';

export type DividerProps = {
  type?: 'horizontal' | 'vertical';
  orientation?: 'left' | 'right' | 'center';
};

export const Divider: React.FC<DividerProps> = ({
  children,
  orientation = 'left',
  type = 'horizontal',
}) => {
  const containerClass = clsx(
    'relative clear-both border-gray-200',
    type === 'horizontal' && 'flex my-4 w-full border-b whitespace-nowrap',
    type === 'vertical' && 'top-[2px] inline-block mx-3 h-3.5 border-l',
  );
  const innerClass = clsx(
    type === 'horizontal' && 'absolute top-2/4 -translate-y-2/4 bg-white px-3',
    orientation === 'left' && 'left-6',
    orientation === 'right' && 'right-6',
    orientation === 'center' && 'right-2/4 translate-x-2/4',
  );

  return (
    <div className={containerClass} role="separator">
      {children && <span className={innerClass}>{children}</span>}
    </div>
  );
};
