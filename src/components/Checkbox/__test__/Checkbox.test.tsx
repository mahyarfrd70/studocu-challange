import userEvent from '@testing-library/user-event';

import {render} from '@testing-library/react';

import Checkbox from '..';

describe('components > Checkbox', () => {
  it('not checked', async () => {
    expect.assertions(4);
    const mockChange = jest.fn();
    const {getByTestId, getByRole} = render(<Checkbox label="title" checked={false} onChange={mockChange} />);
    const user = userEvent.setup();
    expect(getByTestId('checkbox-label')).toHaveTextContent('title');
    expect(getByRole('checkbox')).not.toBeChecked();
    expect(mockChange).toHaveBeenCalledTimes(0);
    await user.click(getByRole('checkbox'));
    expect(mockChange).toHaveBeenCalledTimes(1);
  });
  it('checked', async () => {
    expect.assertions(1);
    const mockChange = jest.fn();
    const {getByRole} = render(<Checkbox label="title" checked={true} onChange={mockChange} />);
    expect(getByRole('checkbox')).toBeChecked();
  });
});
