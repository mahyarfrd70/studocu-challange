import questionsReducer, {
  addNewQuestion,
  deleteQuestion,
  editQuestion,
  manipulateQuestionSync,
  removeAllQuestions,
  resetManipulation,
  sortQuestions,
} from '../slice';
import {ManipulateTypes, QuestionsState} from '../type';

const mockInitialState: QuestionsState = {
  questions: [
    {
      id: '2',
      question: 'second question',
      answer: 'second answer',
    },
    {
      id: '1',
      question: 'first question',
      answer: 'first answer',
    },
  ],
  isLoading: false,
  manipulateType: null,
  manipulateFormValues: {
    id: '',
    question: '',
    answer: '',
  },
};

describe('redux > questions actions', () => {
  it('addNewQuestion mode', () => {
    expect(questionsReducer(mockInitialState, addNewQuestion())).toStrictEqual({
      ...mockInitialState,
      manipulateType: 'add',
    });
  });

  it('sortQuestions', () => {
    expect(questionsReducer(mockInitialState, sortQuestions())).toStrictEqual({
      ...mockInitialState,
      questions: [
        {
          id: '1',
          question: 'first question',
          answer: 'first answer',
        },
        {
          id: '2',
          question: 'second question',
          answer: 'second answer',
        },
      ],
    });
  });

  it('removeAllQuestions', () => {
    expect(questionsReducer(mockInitialState, removeAllQuestions())).toStrictEqual({
      ...mockInitialState,
      questions: [],
    });
  });

  it('editQuestion mode', () => {
    expect(
      questionsReducer(
        mockInitialState,
        editQuestion({
          id: '2',
          question: 'second question',
          answer: 'second answer',
        }),
      ),
    ).toStrictEqual({
      ...mockInitialState,
      manipulateType: 'edit',
      manipulateFormValues: {
        id: '2',
        question: 'second question',
        answer: 'second answer',
      },
    });
  });

  it('resetManipulation', () => {
    expect(
      questionsReducer(
        {
          ...mockInitialState,
          manipulateType: ManipulateTypes.EDIT,
          manipulateFormValues: {
            id: '2',
            question: 'second question',
            answer: 'second answer',
          },
          isLoading: true,
        },
        resetManipulation(),
      ),
    ).toStrictEqual({
      ...mockInitialState,
      manipulateType: null,
      manipulateFormValues: {
        id: '',
        question: '',
        answer: '',
      },
      isLoading: false,
    });
  });

  it('deleteQuestion', () => {
    expect(questionsReducer(mockInitialState, deleteQuestion(1))).toStrictEqual({
      ...mockInitialState,
      questions: [
        {
          id: '2',
          question: 'second question',
          answer: 'second answer',
        },
      ],
    });
  });

  it('add new question', () => {
    const newState = questionsReducer(
      {...mockInitialState, manipulateType: ManipulateTypes.ADD},
      manipulateQuestionSync({
        question: 'third question',
        answer: 'third answer',
      }),
    );
    expect(newState.questions[0]).toHaveProperty('question', 'third question');
    expect(newState.questions[0]).toHaveProperty('answer', 'third answer');
  });

  it('edit question', () => {
    const newState = questionsReducer(
      {
        ...mockInitialState,
        manipulateType: ManipulateTypes.EDIT,
        manipulateFormValues: {
          id: '2',
          question: 'second question',
          answer: 'second answer',
        },
      },
      manipulateQuestionSync({
        question: 'edited second question',
        answer: 'edited second answer',
      }),
    );
    expect(newState.questions).toHaveLength(2);
    expect(newState.questions[0]).toHaveProperty('id', '2');
    expect(newState.questions[0]).toHaveProperty('question', 'edited second question');
    expect(newState.questions[0]).toHaveProperty('answer', 'edited second answer');
  });
});
