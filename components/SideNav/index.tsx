import React from 'react';
import toArray from 'rc-util/lib/Children/toArray';
import devWarning from 'rc-util/lib/warning';
import { SideNavItem } from './SideNavItem';
import { SideNavSubMenu } from './SideNavSubMenu';

export interface SideNavInterface extends React.FC {
  Item: typeof SideNavItem;
  SubMenu: typeof SideNavSubMenu;
}

export const SideNav: SideNavInterface = ({ children }) => {
  return (
    <ul className="shadow-inner-l shadow-gray-200">
      {toArray(children).map((child: any, index: number) => {
        if (!child) return child;

        devWarning(
          child.type.__RETAUI_SIDE_NAV_ITEM === true ||
            child.type.__RETAUI_SIDE_NAV_SUB_MENU === true,
          "Retaui > SideNav: Only accepts SideNav.Item or SideNav.SubMenu as it's children.",
        );

        return React.cloneElement(child, {
          key: index,
        });
      })}
    </ul>
  );
};

SideNav.Item = SideNavItem;
SideNav.SubMenu = SideNavSubMenu;
