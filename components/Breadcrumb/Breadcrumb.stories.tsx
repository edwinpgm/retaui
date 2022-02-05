import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumb } from '.';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item href="/">Products</Breadcrumb.Item>
    <Breadcrumb.Item>Samsung Galaxy 13</Breadcrumb.Item>
  </Breadcrumb>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Separator = Template.bind({});
Separator.args = {
  separator: '>',
};
