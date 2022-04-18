import {waitFor} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import {act} from 'react-dom/test-utils';

import {render} from '@/test-utils';

import ManipulateModal from '..';

const mockedReducer = {
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

describe('widget > Home > List', () => {
  it('edit mode sync', async () => {
    expect.hasAssertions();
    const editMockedState = {
      questions: {
        ...mockedReducer.questions,
        questions: [
          {
            id: '1',
            question: 'question',
            answer: 'answer',
          },
        ],
        manipulateType: 'edit',
        manipulateFormValues: {
          id: '1',
          question: 'question',
          answer: 'answer',
        },
      },
    };

    const {getByText, getByTestId} = render(<ManipulateModal />, {
      preloadedState: {...editMockedState},
    });
    const user = userEvent.setup();
    expect(getByTestId('modal-container')).not.toHaveClass('!hidden');
    expect(getByText('Edit question')).toBeInTheDocument();
    expect(getByTestId('tooltip-content')).toHaveClass('hidden');
    await act(async () => {
      await user.hover(getByText('Edit question'));
    });
    expect(getByTestId('tooltip-content')).not.toHaveClass('hidden');
    expect(getByText('Here you can edit', {exact: false})).toBeInTheDocument();
    await act(async () => {
      await user.unhover(getByText('Edit question'));
    });
    expect(getByTestId('tooltip-content')).toHaveClass('hidden');
    expect(getByTestId('question')).toHaveValue('question');
    expect(getByTestId('answer')).toHaveValue('answer');
    await act(async () => {
      await user.click(getByText('Submit'));
    });
    expect(getByTestId('modal-container')).toHaveClass('!hidden');
  });

  it('add mode sync', async () => {
    expect.hasAssertions();
    const editMockedState = {
      questions: {
        ...mockedReducer.questions,
        questions: [],
        manipulateType: 'add',
      },
    };

    const {getByText, getByTestId} = render(<ManipulateModal />, {
      preloadedState: {...editMockedState},
    });
    const user = userEvent.setup();
    expect(getByTestId('modal-container')).not.toHaveClass('!hidden');
    expect(getByText('Create question')).toBeInTheDocument();
    expect(getByTestId('tooltip-content')).toHaveClass('hidden');
    await act(async () => {
      await user.hover(getByText('Create question'));
    });
    expect(getByTestId('tooltip-content')).not.toHaveClass('hidden');
    expect(getByText('Here you can create', {exact: false})).toBeInTheDocument();
    await act(async () => {
      await user.unhover(getByText('Create question'));
    });
    expect(getByTestId('tooltip-content')).toHaveClass('hidden');
    expect(getByTestId('question')).toHaveValue('');
    expect(getByTestId('answer')).toHaveValue('');
    await act(async () => {
      await user.type(getByTestId('question'), 'question');
      await user.type(getByTestId('answer'), 'answer');
      await user.click(getByText('Submit'));
    });
    expect(getByTestId('modal-container')).toHaveClass('!hidden');
  });

  it('add mode async', async () => {
    expect.hasAssertions();
    const editMockedState = {
      questions: {
        ...mockedReducer.questions,
        questions: [],
        manipulateType: 'add',
      },
    };

    const {getByText, getByTestId, getByRole} = render(<ManipulateModal />, {
      preloadedState: {...editMockedState},
    });
    const user = userEvent.setup();
    await act(async () => {
      await user.type(getByTestId('question'), 'question');
      await user.type(getByTestId('answer'), 'answer');
      await user.click(getByRole('checkbox'));
      await user.click(getByText('Submit'));
    });
    expect(getByText('Loading ...')).toBeInTheDocument();
    expect(getByText('Loading ...')).toBeDisabled();
    waitFor(() => {
      expect(getByTestId('modal-container')).toHaveClass('!hidden');
    });
  });
});
