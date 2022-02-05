import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../Button';
import { Fullscreen } from '.';

export default {
  title: 'Fullscreen',
  component: Fullscreen,
} as ComponentMeta<typeof Fullscreen>;

const Template: ComponentStory<typeof Fullscreen> = (args) => (
  <Fullscreen {...args}>
    <Fullscreen.Header title="Title" onClick={() => console.log('Close')}>
      <Button label="Next" />
    </Fullscreen.Header>
    <div className="overflow-hidden overflow-y-auto h-full">
      <p>
        Aaaa ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        doloribus eum nihil unde reprehenderit possimus corporis sequi,
        recusandae autem provident, obcaecati porro accusantium reiciendis
        soluta sapiente dolor minima officia nulla!
      </p>
    </div>
  </Fullscreen>
);

export const Basic = Template.bind({});
Basic.args = {};
