import userEvent from '@testing-library/user-event';

import {render} from '@/test-utils';

import List from '..';

const mockedReducer = {
  questions: {
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
  },
};

describe('widget > Home > List', () => {
  it('tooltip', async () => {
    expect.assertions(2);
    const {getByText} = render(<List />, {preloadedState: mockedReducer});
    const user = userEvent.setup();
    expect(getByText('Here you can find', {exact: false})).toHaveClass('hidden');
    await user.hover(getByText('Created Questions'));
    expect(getByText('Here you can find', {exact: false})).not.toHaveClass('hidden');
  });

  it('render questions', () => {
    const {getAllByTestId} = render(<List />, {preloadedState: mockedReducer});
    expect(getAllByTestId('card-question')).toHaveLength(2);
  });

  it('open answers and delete', async () => {
    expect.hasAssertions();
    const {getByText, queryByText, queryAllByTestId, getAllByTestId} = render(<List />, {
      preloadedState: mockedReducer,
    });
    const user = userEvent.setup();
    expect(queryByText('There is no question', {exact: false})).not.toBeInTheDocument();
    expect(getAllByTestId('card-question')).toHaveLength(2);
    expect(queryAllByTestId('card-answer')).toHaveLength(0);
    await user.click(getByText('second question'));
    expect(getAllByTestId('card-answer')).toHaveLength(1);
    await user.click(getByText('first question'));
    expect(getAllByTestId('card-answer')).toHaveLength(2);
    await user.click(getAllByTestId('card-delete-button')[0]);
    expect(getAllByTestId('card-question')).toHaveLength(1);
    await user.click(getAllByTestId('card-delete-button')[0]);
    expect(queryAllByTestId('card-question')).toHaveLength(0);
    expect(getByText('There is no question', {exact: false})).toBeInTheDocument();
  });
});
