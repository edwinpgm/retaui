import React from 'react';
import clsx from 'clsx';

export enum ButtonSize {
  Small = 'small',
  Middle = 'middle',
  Large = 'large',
}

export enum ButtonAppearance {
  Primary = 'primary',
  Outline = 'outline',
  Ghost = 'ghost',
  Dashed = 'dashed',
  Link = 'link',
  Text = 'text',
  Default = 'default',
}

export type ButtonProps<E extends React.ElementType = React.ElementType> = {
  label: string;
  LeftIcon?: any;
  RightIcon?: any;
  className?: string;
  size?: ButtonSize;
  appearance?: ButtonAppearance;
  as?: E;
} & React.ComponentPropsWithoutRef<'button'>;

type Ref = HTMLButtonElement;

const defaultElement = 'button';

export const Button = React.forwardRef(
  (props: ButtonProps, ref: React.Ref<Ref>) => {
    const {
      label,
      LeftIcon,
      RightIcon,
      size = ButtonSize.Middle,
      appearance = ButtonAppearance.Primary,
      className,
      as,
      ...restProps
    } = props;

    const TagName = as || defaultElement;

    const clsSize = {
      [ButtonSize.Small]: 'px-2 py-1 text-sm font-normal',
      [ButtonSize.Middle]: 'px-3 py-2 font-medium',
      [ButtonSize.Large]: 'px-4 py-3 font-medium',
    };

    const clsAppearance = {
      [ButtonAppearance.Primary]: 'bg-primary-800 text-white',
      [ButtonAppearance.Outline]:
        'bg-transparent text-primary-800 rounded-md border border-primary-800',
      [ButtonAppearance.Ghost]: 'px-3 py-2',
      [ButtonAppearance.Dashed]: 'px-4 py-3',
      [ButtonAppearance.Link]: 'px-4 py-3',
      [ButtonAppearance.Text]: 'px-4 py-3',
      [ButtonAppearance.Default]:
        'shadow-inner shadow-gray-300 disabled:opacity-25 hover:bg-gray-50',
    };

    return (
      <TagName
        {...restProps}
        ref={ref}
        className={clsx(
          'flex items-center space-x-2 rounded-md text-center',
          LeftIcon || RightIcon ? 'justify-between' : 'justify-center',
          clsSize[size],
          clsAppearance[appearance],
          className,
        )}
      >
        {LeftIcon && <div>{<LeftIcon className="h-3.5 w-3.5" />}</div>}
        <span>{label}</span>
        {RightIcon && <div>{<RightIcon className="h-3.5 w-3.5" />}</div>}
      </TagName>
    );
  },
);

Button.displayName = 'Button';
