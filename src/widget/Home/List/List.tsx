import React, {useCallback} from 'react';

import Card from '@/components/Card';
import If from '@/components/If';
import Tooltip from '@/components/Tooltip';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {editQuestion, deleteQuestion} from '@/redux/questions/slice';
import type {Question} from '@/redux/questions/type';

function List() {
  const {questions} = useAppSelector((state) => state.questions);
  const dispatch = useAppDispatch();

  const handleEditQuestion = useCallback((question: Question) => {
    dispatch(editQuestion(question));
  }, []);

  const handleDeleteQuestion = useCallback((index: number) => {
    dispatch(deleteQuestion(index));
  }, []);

  return (
    <div>
      <If condition={Boolean(questions.length)}>
        <div className="w-fit mb-6">
          <Tooltip tooltipContent="Here you can find the created questions and their answer.">
            <h2 className="text-2xl border-b-2">Created Questions</h2>
          </Tooltip>
        </div>
        {questions.map((item, i) => (
          <Card
            key={item.id}
            question={item.question}
            answer={item.answer}
            onEditQuestion={() => handleEditQuestion(item)}
            onDeleteQuestion={() => handleDeleteQuestion(i)}
          />
        ))}
      </If>
      <If condition={!Boolean(questions.length)}>
        <div className="flex pt-10 justify-center text-lg items-center text-center">
          There is no question, please try to create a question first.
        </div>
      </If>
    </div>
  );
}

export default List;
