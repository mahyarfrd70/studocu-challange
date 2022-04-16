import React, {PropsWithChildren, useCallback} from 'react';

import Header from '@/components/Header';
import {useAppDispatch} from '@/redux/hooks';
import {addNewQuestion, removeAllQuestions, sortQuestions} from '@/redux/questions/slice';

const Layout = ({children}: PropsWithChildren<Record<string, unknown>>) => {
  const dispatch = useAppDispatch();

  const handleAddQuestion = useCallback(() => {
    dispatch(addNewQuestion());
  }, []);

  const handleSortQuestions = useCallback(() => {
    dispatch(sortQuestions());
  }, []);

  const handleRemoveAllQuestions = useCallback(() => {
    dispatch(removeAllQuestions());
  }, []);

  return (
    <div>
      <Header
        onAddNewQuestion={handleAddQuestion}
        onSort={handleSortQuestions}
        onRemoveAll={handleRemoveAllQuestions}
      />
      {children}
    </div>
  );
};

export default Layout;
