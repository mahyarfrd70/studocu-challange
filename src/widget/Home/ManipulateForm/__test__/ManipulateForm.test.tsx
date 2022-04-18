import userEvent from '@testing-library/user-event';

import {act} from 'react-dom/test-utils';

import {render} from '@/test-utils';

import ManipulateForm from '..';

const mockedState = {
  questions: {
    questions: [],
    isLoading: false,
    manipulateType: null,
    manipulateFormValues: {
      id: '',
      question: '',
      answer: '',
    },
  },
};

describe('widget > Home > ManipulateForm', () => {
  it('validation', async () => {
    expect.hasAssertions();
    const {getByText, queryByTestId, getByRole, getByTestId} = render(<ManipulateForm />, {
      preloadedState: mockedState,
    });
    const user = userEvent.setup();
    await act(async () => {
      await user.type(getByTestId('question'), 'q');
      await user.click(getByText('Submit'));
    });

    expect(getByTestId('question')).toHaveValue('q');
    expect(getByTestId('answer')).toHaveValue('');
    expect(getByTestId('question-invalid-text')).toHaveTextContent('question must be at least 2 characters');
    expect(getByTestId('answer-invalid-text')).toHaveTextContent('answer is a required field');
    await act(async () => {
      await user.type(getByTestId('question'), 'uestion');
      await user.type(getByTestId('answer'), 'answer');
    });

    expect(getByTestId('question')).toHaveValue('question');
    expect(getByTestId('answer')).toHaveValue('answer');
    expect(queryByTestId('question-invalid-text')).not.toBeInTheDocument();
    expect(queryByTestId('answer-invalid-text')).not.toBeInTheDocument();
    expect(getByRole('checkbox')).not.toBeChecked();
    await act(async () => {
      await user.click(getByRole('checkbox'));
    });
    expect(getByRole('checkbox')).toBeChecked();
  });
});
