import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

import {ManipulateTypes, Question, QuestionsState} from './type';

const defaultManipulateFormValues = {
  id: '',
  question: '',
  answer: '',
};

export const questionsInitialState: QuestionsState = {
  questions: [],
  isLoading: false,
  manipulateType: null,
  manipulateFormValues: defaultManipulateFormValues,
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: questionsInitialState,
  reducers: {
    addNewQuestion(state) {
      state.manipulateType = ManipulateTypes.ADD;
    },
    sortQuestions(state) {
      state.questions = state.questions.sort((a, b) => {
        if (a.question < b.question) {
          return -1;
        }
        if (a.question > b.question) {
          return 1;
        }
        return 0;
      });
    },
    removeAllQuestions(state) {
      state.questions = [];
    },
    resetManipulation(state) {
      state.manipulateType = null;
      state.manipulateFormValues = defaultManipulateFormValues;
      state.isLoading = false;
    },
    editQuestion(state, action: PayloadAction<Question>) {
      state.manipulateType = ManipulateTypes.EDIT;
      state.manipulateFormValues = action.payload;
    },
    deleteQuestion(state, action: PayloadAction<number>) {
      state.questions.splice(action.payload, 1);
    },
    startLoading(state) {
      state.isLoading = true;
    },
    manipulateQuestionSync(state, action: PayloadAction<Omit<Question, 'id'>>) {
      if (state.manipulateType === ManipulateTypes.ADD) {
        const newQuestion = {
          id: uuidv4(),
          ...action.payload,
        };
        state.questions = [newQuestion, ...state.questions];
      }
      if (state.manipulateType === ManipulateTypes.EDIT) {
        const {question, answer} = action.payload;
        const editedQuestionIndex = state.questions.findIndex((item) => item.id === state.manipulateFormValues.id);
        state.questions[editedQuestionIndex].question = question;
        state.questions[editedQuestionIndex].answer = answer;
      }
    },
  },
});

const delayedResponse = (values: Omit<Question, 'id'>): Promise<Omit<Question, 'id'>> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(values), 5000);
  });
};

export const manipulateQuestionAsync = createAsyncThunk(
  'questions/manipulateAsync',
  async (values: Omit<Question, 'id'>, {dispatch}) => {
    const {startLoading, manipulateQuestionSync, resetManipulation} = questionsSlice.actions;
    dispatch(startLoading());
    const data = await delayedResponse(values);
    dispatch(manipulateQuestionSync(data));
    dispatch(resetManipulation());
  },
);

export const {
  addNewQuestion,
  sortQuestions,
  removeAllQuestions,
  resetManipulation,
  editQuestion,
  deleteQuestion,
  manipulateQuestionSync,
} = questionsSlice.actions;

export default questionsSlice.reducer;
