import clsx from 'clsx';

import React, {PropsWithChildren, useCallback, useEffect, useState} from 'react';

import If from '../If';
import {ModalProps} from './Modal.type';
import styles from './styles.module.css';

const Modal = ({open, onClose, children}: PropsWithChildren<ModalProps>) => {
  const [isOpen, setIsOepn] = useState(open);

  // the following code will disable scrolling content when the modal is open.
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOepn(open);
  }, [open]);

  const handleCloseModal = useCallback(() => {
    setIsOepn(false);
    onClose?.();
  }, []);

  return (
    <div className={clsx(styles.modalContainer, {'!hidden': !isOpen})}>
      <If condition={Boolean(onClose)}>
        <div className="absolute top-0 bottom-0 right-0 left-0" onClick={handleCloseModal} />
      </If>
      <div className="bg-white p-4 opacity-100 z-40 max-w-3xl w-full">
        <If condition={isOpen}>{children}</If>
      </div>
    </div>
  );
};

export default Modal;
