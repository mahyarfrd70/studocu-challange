import userEvent from '@testing-library/user-event';

import {render} from '@testing-library/react';

import TextInput from '..';

describe('components > TextInput', () => {
  it('valid', async () => {
    expect.assertions(5);
    const mockChange = jest.fn();
    const {getByTestId, queryByTestId} = render(
      <TextInput name="email" type="email" value="test" onChange={mockChange} />,
    );
    const user = userEvent.setup();
    expect(getByTestId('email')).toHaveValue('test');
    expect(getByTestId('email')).toHaveAttribute('type', 'email');
    expect(getByTestId('email')).toHaveAttribute('name', 'email');
    await user.type(getByTestId('email'), 'text');
    expect(mockChange).toHaveBeenCalledTimes(4);
    expect(queryByTestId('email-invalid-text')).not.toBeInTheDocument();
  });

  it('invalid', () => {
    const mockChange = jest.fn();
    const {getByTestId} = render(
      <TextInput name="email" type="email" invalidMessage="invalid message" value="test" onChange={mockChange} />,
    );
    expect(getByTestId('email')).toHaveClass('input-error');
    expect(getByTestId('email-invalid-text')).toBeInTheDocument();
    expect(getByTestId('email-invalid-text')).toHaveTextContent('invalid message');
  });
});
