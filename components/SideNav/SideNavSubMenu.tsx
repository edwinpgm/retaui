import React from 'react';
// import clsx from 'clsx';
import toArray from 'rc-util/lib/Children/toArray';
import devWarning from 'rc-util/lib/warning';
import { SideNavItem } from './SideNavItem';

interface SideNavProps {
  title: string;
  isActive?: boolean;
  href?: string;
  onClick?: () => void;
}

interface SideNavItemInterface extends React.FC<SideNavProps> {
  __RETAUI_SIDE_NAV_SUB_MENU: boolean;
}

export const SideNavSubMenu: SideNavItemInterface = ({
  title,
  children,
  isActive = false,
  onClick,
  href,
}) => {
  return (
    <li className="mb-3">
      <SideNavItem isActive={isActive} href={href} onClick={onClick}>
        {title}
      </SideNavItem>
      <ul>
        {toArray(children).map((child: any, index: number) => {
          if (!child) return child;

          devWarning(
            child.type.__RETAUI_SIDE_NAV_ITEM === true,
            "Retaui > SideNav: Only accepts SideNav.Item as it's children.",
          );

          return React.cloneElement(child, {
            key: index,
            indent: true,
          });
        })}
      </ul>
    </li>
  );
};

SideNavSubMenu.__RETAUI_SIDE_NAV_SUB_MENU = true;
