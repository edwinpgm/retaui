import React from 'react';
import clsx from 'clsx';

interface SideNavProps {
  isActive?: boolean;
  indent?: boolean;
  href?: string;
  onClick?: () => void;
}

interface SideNavItemInterface extends React.FC<SideNavProps> {
  __RETAUI_SIDE_NAV_ITEM: boolean;
}

export const SideNavItem: SideNavItemInterface = ({
  children,
  isActive = false,
  onClick,
  href,
  indent = false,
}) => {
  return (
    <li>
      <div
        className={clsx(
          'mb-2',
          isActive
            ? 'shadow-inner-l-2 shadow-indigo-400'
            : 'hover:shadow-inner-l shadow-indigo-400',
        )}
      >
        <a
          href={href}
          className={clsx(
            'text-sm cursor-pointer',
            isActive ? 'font-semibold text-indigo-500' : 'text-slate-700',
            indent ? 'pl-5' : 'pl-3',
          )}
          onClick={onClick}
        >
          {children}
        </a>
      </div>
    </li>
  );
};

SideNavItem.__RETAUI_SIDE_NAV_ITEM = true;
