import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal, ModalProps } from '.';

export default {
  title: 'Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <Modal {...args}>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ex,
      nesciunt ut itaque eum perspiciatis quae nisi, veniam natus perferendis
      laudantium dolorum assumenda iusto inventore similique, quod neque est
      quibusdam.
    </p>
  </Modal>
);

export const Basic = Template.bind({});
Basic.args = {
  isOpen: true,
  onClose: () => console.log('Close Modal'),
  title: 'Modal Title',
};
