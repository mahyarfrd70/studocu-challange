import userEvent from '@testing-library/user-event';

import {act} from 'react-dom/test-utils';

import {render} from '@/test-utils';

import Home from '..';

describe('views > Home', () => {
  it('Home integration', async () => {
    expect.hasAssertions();
    const {getByText, getByTestId, queryByText, getAllByTestId, queryAllByTestId} = render(<Home />);
    const user = userEvent.setup();
    expect(getByText('There is no question', {exact: false})).toBeInTheDocument();
    await act(async () => {
      await user.click(getByText('Add question'));
    });
    expect(getByText('Create question')).toBeInTheDocument();
    expect(getByTestId('question')).toHaveValue('');
    expect(getByTestId('answer')).toHaveValue('');
    await act(async () => {
      await user.type(getByTestId('question'), 'are you ready?');
      await user.type(getByTestId('answer'), 'yes, I am');
      await user.click(getByText('Submit'));
    });
    expect(getByTestId('modal-container')).toHaveClass('!hidden');
    expect(queryByText('There is no question', {exact: false})).not.toBeInTheDocument();
    expect(getAllByTestId('card-question')).toHaveLength(1);
    expect(getAllByTestId('card-question')[0]).toHaveTextContent('are you ready?');
    await act(async () => {
      await user.click(getByText('Add question'));
    });
    expect(getByText('Create question')).toBeInTheDocument();
    expect(getByTestId('question')).toHaveValue('');
    expect(getByTestId('answer')).toHaveValue('');
    await act(async () => {
      await user.type(getByTestId('question'), 'do you agree?');
      await user.type(getByTestId('answer'), 'yes, I do');
      await user.click(getByText('Submit'));
    });
    expect(getByTestId('modal-container')).toHaveClass('!hidden');
    expect(getAllByTestId('card-question')).toHaveLength(2);
    expect(getAllByTestId('card-question')[0]).toHaveTextContent('do you agree?');
    expect(getAllByTestId('card-question')[1]).toHaveTextContent('are you ready?');
    expect(queryAllByTestId('card-answer')).toHaveLength(0);
    await act(async () => {
      await user.click(getByText('are you ready?'));
    });
    expect(getAllByTestId('card-answer')[0]).toHaveTextContent('yes, I am');
    expect(getByTestId('modal-container')).toHaveClass('!hidden');
    await act(async () => {
      await user.click(getByTestId('card-edit-button'));
    });
    expect(getByTestId('modal-container')).not.toHaveClass('!hidden');
    expect(getByTestId('question')).toHaveValue('are you ready?');
    expect(getByTestId('answer')).toHaveValue('yes, I am');
    await act(async () => {
      await user.clear(getByTestId('question'));
      await user.clear(getByTestId('answer'));
      await user.type(getByTestId('question'), 'are you alone?');
      await user.type(getByTestId('answer'), "No, I'm not");
      await user.click(getByText('Submit'));
    });
    expect(getAllByTestId('card-question')[1]).toHaveTextContent('are you alone?');
    expect(getAllByTestId('card-answer')[0]).toHaveTextContent("No, I'm not");
    await act(async () => {
      await user.click(getByText('Add question'));
    });
    expect(getByText('Create question')).toBeInTheDocument();
    expect(getByTestId('question')).toHaveValue('');
    expect(getByTestId('answer')).toHaveValue('');
    await act(async () => {
      await user.type(getByTestId('question'), 'what time is it?');
      await user.type(getByTestId('answer'), 'around 11');
      await user.click(getByText('Submit'));
    });
    expect(getByTestId('modal-container')).toHaveClass('!hidden');
    expect(getAllByTestId('card-question')).toHaveLength(3);
    expect(getAllByTestId('card-question')[0]).toHaveTextContent('what time is it?');
    expect(getAllByTestId('card-question')[1]).toHaveTextContent('do you agree?');
    expect(getAllByTestId('card-question')[2]).toHaveTextContent('are you alone?');
    await act(async () => {
      await user.click(getByText('Sort questions'));
    });
    expect(getAllByTestId('card-question')[0]).toHaveTextContent('are you alone?');
    expect(getAllByTestId('card-question')[1]).toHaveTextContent('do you agree?');
    expect(getAllByTestId('card-question')[2]).toHaveTextContent('what time is it?');
    await act(async () => {
      await user.click(getByTestId('card-delete-button'));
    });
    expect(getAllByTestId('card-question')).toHaveLength(2);
    await act(async () => {
      await user.click(getByText('Remove all'));
    });
    expect(queryAllByTestId('card-question')).toHaveLength(0);
    expect(getByText('There is no question', {exact: false})).toBeInTheDocument();
  });
});
