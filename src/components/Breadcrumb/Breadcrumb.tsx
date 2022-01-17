import React from 'react';
import toArray from 'rc-util/lib/Children/toArray';
import devWarning from 'rc-util/lib/warning';
import { BreadcrumbItem } from './BreadcrumbItem';

export type BreadcrumbProps = {
  separator?: string;
};

export interface BreadcrumbInterface extends React.FC<BreadcrumbProps> {
  Item: typeof BreadcrumbItem;
}

export const Breadcrumb: BreadcrumbInterface = ({
  children,
  separator,
  ...restProps
}) => {
  return (
    <div>
      {toArray(children).map((child: any, index: number) => {
        if (!child) return child;

        devWarning(
          child.type.__RETAUI_BREADCRUMB_ITEM === true,
          "Retaui > Breadcrumb: Only accepts Breadcrumb.Item as it's children.",
        );

        return React.cloneElement(child, {
          separator,
          key: index,
          ...restProps,
        });
      })}
    </div>
  );
};

Breadcrumb.Item = BreadcrumbItem;
