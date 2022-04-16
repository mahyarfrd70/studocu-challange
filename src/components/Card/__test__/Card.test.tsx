import userEvent from '@testing-library/user-event';

import {render} from '@testing-library/react';

import Card from '..';

describe('components > Card', () => {
  it('with permission to delete and not reacted', async () => {
    expect.assertions(18);
    const mockDelete = jest.fn();
    const mockEdit = jest.fn();
    const {getByTestId, queryByTestId} = render(
      <Card question="test question" answer="test answer" onDeleteQuestion={mockDelete} onEditQuestion={mockEdit} />,
    );
    const user = userEvent.setup();
    expect(getByTestId('card-question')).toHaveTextContent('test question');
    expect(queryByTestId('card-answer')).not.toBeInTheDocument();
    expect(queryByTestId('card-delete-button')).not.toBeInTheDocument();
    expect(queryByTestId('card-edit-button')).not.toBeInTheDocument();
    await user.click(getByTestId('card-question'));
    expect(getByTestId('card-answer')).toBeInTheDocument();
    expect(getByTestId('card-delete-button')).toBeInTheDocument();
    expect(getByTestId('card-edit-button')).toBeInTheDocument();
    expect(mockDelete).toHaveBeenCalledTimes(0);
    expect(mockEdit).toHaveBeenCalledTimes(0);
    await user.click(getByTestId('card-delete-button'));
    expect(getByTestId('card-answer')).toBeInTheDocument();
    expect(mockDelete).toHaveBeenCalledTimes(1);
    expect(mockEdit).toHaveBeenCalledTimes(0);
    await user.click(getByTestId('card-edit-button'));
    expect(getByTestId('card-answer')).toBeInTheDocument();
    expect(mockDelete).toHaveBeenCalledTimes(1);
    expect(mockEdit).toHaveBeenCalledTimes(1);
    await user.click(getByTestId('card-question'));
    expect(queryByTestId('card-answer')).not.toBeInTheDocument();
    expect(queryByTestId('card-delete-button')).not.toBeInTheDocument();
    expect(queryByTestId('card-edit-button')).not.toBeInTheDocument();
  });
});
