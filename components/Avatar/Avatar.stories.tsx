import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar, AvatarProps } from './';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args: AvatarProps) => (
  <Avatar {...args} />
);

export const Image = Template.bind({});
Image.args = {
  src: 'https://picsum.photos/200',
};

export const Alt = Template.bind({});
Alt.args = {
  alt: 'Ana Celeste',
};
