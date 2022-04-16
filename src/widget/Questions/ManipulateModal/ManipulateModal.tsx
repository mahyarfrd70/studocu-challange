import React, {useCallback, useMemo} from 'react';

import Modal from '@/components/Modal';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {resetManipulation} from '@/redux/questions/slice';
import {ManipulateTypes} from '@/redux/questions/type';

import ManipulateForm from '../ManipulateForm';

const ManipulateModal = () => {
  const {manipulateType} = useAppSelector((state) => state.questions);
  const dispatch = useAppDispatch();

  const handleResetManipulation = useCallback(() => {
    dispatch(resetManipulation());
  }, []);

  const modalType = useMemo(() => (manipulateType === ManipulateTypes.EDIT ? 'Edit' : 'Create'), [manipulateType]);

  return (
    <Modal open={Boolean(manipulateType)} onClose={handleResetManipulation}>
      <h2 className="mb-3 text-2xl">{modalType} question</h2>
      <ManipulateForm />
    </Modal>
  );
};

export default ManipulateModal;
