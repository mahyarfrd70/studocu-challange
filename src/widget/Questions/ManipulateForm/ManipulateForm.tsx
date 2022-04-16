import {useFormik} from 'formik';
import * as Yup from 'yup';

import React, {ChangeEvent, useCallback, useState} from 'react';

import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import InputWrapper from '@/components/InputWrapper';
import TextArea from '@/components/TextArea';
import TextInput from '@/components/TextInput';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {manipulateQuestionAsync, manipulateQuestionSync, resetManipulation} from '@/redux/questions/slice';

const ManipulateForm = () => {
  const [withDelay, setWithDelay] = useState(false);
  const {manipulateFormValues, isLoading} = useAppSelector((state) => state.questions);
  const dispatch = useAppDispatch();

  const {values, errors, touched, handleChange, handleSubmit} = useFormik({
    initialValues: {
      question: manipulateFormValues.question,
      answer: manipulateFormValues.answer,
    },
    validationSchema: Yup.object({
      question: Yup.string().min(2).required(),
      answer: Yup.string().min(2).required(),
    }),
    onSubmit: (values) => {
      if (withDelay) {
        dispatch(manipulateQuestionAsync(values));
      } else {
        dispatch(manipulateQuestionSync(values));
        dispatch(resetManipulation());
      }
    },
  });

  const toggleDelay = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setWithDelay(e.target.checked);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper label="Question">
        <TextInput
          name="question"
          value={values.question}
          invalidMessage={touched.question && errors.question}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper label="Answer">
        <TextArea
          name="answer"
          value={values.answer}
          invalidMessage={touched.answer && errors.answer}
          onChange={handleChange}
        />
      </InputWrapper>
      <Checkbox label="Add question with 5 seconds delay." checked={withDelay} onChange={toggleDelay} />
      <Button className="mt-4" isLoading={isLoading}>
        Submit
      </Button>
    </form>
  );
};

export default ManipulateForm;
