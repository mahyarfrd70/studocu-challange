import userEvent from '@testing-library/user-event';

import {render} from '@testing-library/react';

import TextArea from '..';

describe('components > TextArea', () => {
  it('valid', async () => {
    expect.assertions(4);
    const mockChange = jest.fn();
    const {getByTestId, queryByTestId} = render(<TextArea name="answer" value="test" onChange={mockChange} />);
    const user = userEvent.setup();
    expect(getByTestId('answer')).toHaveValue('test');
    expect(getByTestId('answer')).toHaveAttribute('name', 'answer');
    await user.type(getByTestId('answer'), 'text');
    expect(mockChange).toHaveBeenCalledTimes(4);
    expect(queryByTestId('answer-invalid-text')).not.toBeInTheDocument();
  });

  it('invalid', () => {
    const mockChange = jest.fn();
    const {getByTestId} = render(
      <TextArea name="answer" invalidMessage="invalid message" value="test" onChange={mockChange} />,
    );
    expect(getByTestId('answer')).toHaveClass('textarea-error');
    expect(getByTestId('answer-invalid-text')).toBeInTheDocument();
    expect(getByTestId('answer-invalid-text')).toHaveTextContent('invalid message');
  });
});
