import React from 'react';

export type BreadcrumbItemProps = {
  separator?: string;
  href?: string;
};

interface BreadcrumbItemInterface extends React.FC<BreadcrumbItemProps> {
  __RETAUI_BREADCRUMB_ITEM: boolean;
}

export const BreadcrumbItem: BreadcrumbItemInterface = ({
  children,
  separator = '/',
  ...restProps
}) => {
  let label = (
    <span className="text-gray-400 group-last:text-gray-800">{children}</span>
  );
  if ('href' in restProps) {
    label = (
      <a
        className="text-gray-400 group-last:text-gray-800 hover:text-blue-500"
        {...restProps}
      >
        {children}
      </a>
    );
  }

  return (
    <span className="group text-sm">
      {label}
      <span className="inline px-2 text-gray-400 group-last:hidden">
        {separator}
      </span>
    </span>
  );
};

BreadcrumbItem.__RETAUI_BREADCRUMB_ITEM = true;
