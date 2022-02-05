import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider, DividerProps } from './';

export default {
  title: 'Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args: DividerProps) => (
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius
      molestiae maxime omnis harum ab dolor ex nulla incidunt! Perferendis dicta
      animi nobis excepturi perspiciatis atque sint tenetur nulla incidunt!
    </p>
    <Divider {...args} />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius
      molestiae maxime omnis harum ab dolor ex nulla incidunt! Perferendis dicta
      animi nobis excepturi perspiciatis atque sint tenetur nulla incidunt!
    </p>
  </div>
);

const TemplateVertical: ComponentStory<typeof Divider> = (
  args: DividerProps,
) => (
  <div>
    <span>Nav 1</span>
    <Divider {...args} />
    <span>Nav 2</span>
    <Divider {...args} />
    <span>Nav 3</span>
  </div>
);

export const Basic = Template.bind({});
Basic.args = {};

export const Left = Template.bind({});
Left.args = {
  orientation: 'left',
  children: 'Left',
};

export const Center = Template.bind({});
Center.args = {
  orientation: 'center',
  children: 'Center',
};

export const Right = Template.bind({});
Right.args = {
  orientation: 'right',
  children: 'Right',
};

export const Vertical = TemplateVertical.bind({});
Vertical.args = {
  type: 'vertical',
};
