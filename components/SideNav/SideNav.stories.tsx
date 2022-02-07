import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideNav, SideNavInterface } from '.';

export default {
  title: 'SideNav',
  component: SideNav,
} as ComponentMeta<SideNavInterface>;

const Template: ComponentStory<typeof SideNav> = (args) => (
  <SideNav {...args}>
    <SideNav.Item onClick={() => console.log('Click Item')}>
      Menu 1
    </SideNav.Item>
    <SideNav.Item href="/">Menu 2</SideNav.Item>
    <SideNav.SubMenu title="Menu 3">
      <SideNav.Item href="/">Sub Menu 1</SideNav.Item>
      <SideNav.Item href="/" isActive>
        Sub Menu 2
      </SideNav.Item>
    </SideNav.SubMenu>
    <SideNav.Item href="/">Menu 4</SideNav.Item>
  </SideNav>
);

export const Basic = Template.bind({});
Basic.args = {};
