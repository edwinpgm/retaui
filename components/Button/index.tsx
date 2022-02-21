import React from 'react';
import clsx from 'clsx';

export enum ButtonSize {
  Small = 'small',
  Middle = 'middle',
  Large = 'large',
}

export enum ButtonType {
  Primary = 'primary',
  Ghost = 'ghost',
  Dashed = 'dashed',
  Link = 'link',
  Text = 'text',
  Default = 'default',
}

export type ButtonProps = {
  label: string;
  LeftIcon?: any;
  RightIcon?: any;
  className?: string;
  size?: ButtonSize;
  type?: ButtonType;
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'type'>;
type Ref = HTMLButtonElement;

export const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<Ref>) => {
    const {
      label,
      LeftIcon,
      RightIcon,
      size = ButtonSize.Middle,
      type = ButtonType.Default,
      className,
      ...restProps
    } = props;

    const clsSize = {
      [ButtonSize.Small]: 'px-2 py-1 text-sm font-normal',
      [ButtonSize.Middle]: 'px-3 py-2 font-medium',
      [ButtonSize.Large]: 'px-4 py-3 font-medium',
    };

    const clsType = {
      [ButtonType.Primary]: 'bg-indigo-600 text-white',
      [ButtonType.Ghost]: 'px-3 py-2',
      [ButtonType.Dashed]: 'px-4 py-3',
      [ButtonType.Link]: 'px-4 py-3',
      [ButtonType.Text]: 'px-4 py-3',
      [ButtonType.Default]:
        'shadow-inner shadow-gray-300 disabled:opacity-25 hover:bg-gray-50',
    };

    return (
      <button
        {...restProps}
        ref={ref}
        className={clsx(
          'flex items-center space-x-2 rounded-md text-center',
          LeftIcon || RightIcon ? 'justify-between' : 'justify-center',
          clsSize[size],
          clsType[type],
          className,
        )}
      >
        {LeftIcon && <div>{<LeftIcon className="h-3.5 w-3.5" />}</div>}
        <span>{label}</span>
        {RightIcon && <div>{<RightIcon className="h-3.5 w-3.5" />}</div>}
      </button>
    );
  },
);

Button.displayName = 'Button';
