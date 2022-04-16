import React, {memo, useCallback, useState} from 'react';

import {CardProps} from '.';
import Button from '../Button';
import If from '../If';

const Card = ({question, answer, onDeleteQuestion, onEditQuestion}: CardProps) => {
  const [isAnswerShown, setIsAnswerShown] = useState(false);

  const toggleAnswer = useCallback(() => {
    setIsAnswerShown((prev) => !prev);
  }, [isAnswerShown]);

  return (
    <div className="card card-bordered w-full bg-base-100 shadow-xl mb-3">
      <div className="flex justify-between items-start p-4">
        <h3
          data-testid="card-question"
          className="cursor-pointer mr-3 text-base self-center font-bold break-all"
          onClick={toggleAnswer}>
          {question}
        </h3>
      </div>
      <If condition={isAnswerShown}>
        <hr />
        <div data-testid="card-answer" className="p-4">
          <span className="font-bold text-slate-400">Answer:</span>
          <p className="ml-3 mt-2 text-slate-500">{answer}</p>
          <div className="flex flex-row-reverse children:ml-2 children:btn-sm children:normal-case">
            <Button onClick={onDeleteQuestion} dataTestId="card-delete-button" buttonTypeClass="btn-error">
              Delete
            </Button>
            <Button onClick={onEditQuestion} dataTestId="card-edit-button" buttonTypeClass="btn-info">
              Edit
            </Button>
          </div>
        </div>
      </If>
    </div>
  );
};

export default memo(Card);
