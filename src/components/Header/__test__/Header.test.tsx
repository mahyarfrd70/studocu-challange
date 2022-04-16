import userEvent from '@testing-library/user-event';

import {render} from '@testing-library/react';

import Header from '..';

describe('Header component', () => {
  //these tests heas been written based on the useAuthMember mock and the order of test has not to be changed
  it('buttons', async () => {
    const addMock = jest.fn();
    const sortMock = jest.fn();
    const removeMock = jest.fn();
    const {getByText} = render(<Header onAddNewQuestion={addMock} onSort={sortMock} onRemoveAll={removeMock} />);
    const user = userEvent.setup();
    expect(addMock).toHaveBeenCalledTimes(0);
    expect(sortMock).toHaveBeenCalledTimes(0);
    expect(removeMock).toHaveBeenCalledTimes(0);
    await user.click(getByText('Add question'));
    expect(addMock).toHaveBeenCalledTimes(1);
    expect(sortMock).toHaveBeenCalledTimes(0);
    expect(removeMock).toHaveBeenCalledTimes(0);
    await user.click(getByText('Sort questions'));
    expect(addMock).toHaveBeenCalledTimes(1);
    expect(sortMock).toHaveBeenCalledTimes(1);
    expect(removeMock).toHaveBeenCalledTimes(0);
    await user.click(getByText('Remove all'));
    expect(addMock).toHaveBeenCalledTimes(1);
    expect(sortMock).toHaveBeenCalledTimes(1);
    expect(removeMock).toHaveBeenCalledTimes(1);
  });
});
