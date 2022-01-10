import React from 'react';

export type ButtonProps = {
  label: string;
  LeftIcon?: any;
  RightIcon?: any;
} & React.ComponentPropsWithoutRef<'button'>;
type Ref = HTMLButtonElement;

export const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<Ref>) => {
    const { label, LeftIcon, RightIcon, ...restProps } = props;

    return (
      <button
        ref={ref}
        className="flex items-center space-x-2 px-2 py-1 rounded-md border-gray-300 border disabled:opacity-25 hover:bg-gray-50"
        {...restProps}
      >
        {LeftIcon && (
          <div>{<LeftIcon className="h-3.5 w-3.5 text-gray-600" />}</div>
        )}
        <span className="text-sm">{label}</span>
        {RightIcon && (
          <div>{<RightIcon className="h-3.5 w-3.5 text-gray-600" />}</div>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
