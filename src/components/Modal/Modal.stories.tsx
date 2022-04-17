import {action} from '@storybook/addon-actions';
import {useEffect} from '@storybook/addons';

import type {Meta, Story} from '@storybook/react';
import {useState} from 'react';

import Modal from '.';
import type {ModalProps} from '.';
import Button from '../Button';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

export const Default: Story<ModalProps> = ({open, ...args}) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleToggleModal = (open: boolean) => {
    setIsOpen(open);
    action('close-modal');
  };

  return (
    <>
      <Button onClick={() => handleToggleModal(true)}>Open Modal</Button>
      <Modal {...args} open={isOpen} onClose={() => handleToggleModal(false)}>
        <span>Modal Content</span>
      </Modal>
    </>
  );
};

Default.args = {
  open: false,
};
