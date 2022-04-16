import userEvent from '@testing-library/user-event';

import {render} from '@testing-library/react';

import Button from '..';

describe('components > Button', () => {
  it('disable loading', async () => {
    expect.assertions(3);
    const mockClick = jest.fn();
    const {getByText} = render(
      <Button buttonTypeClass="btn-success" className="test-class" onClick={mockClick}>
        Click Me
      </Button>,
    );
    const button = getByText('Click Me');
    const user = userEvent.setup();
    expect(button).toHaveClass('btn-success', 'test-class');
    expect(mockClick).toHaveBeenCalledTimes(0);
    await user.click(button);
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
  it('enable loading', async () => {
    expect.assertions(4);
    const mockClick = jest.fn();
    const {queryByText, getByText} = render(
      <Button isLoading={true} buttonTypeClass="btn-success" className="test-class" onClick={mockClick}>
        Click Me
      </Button>,
    );
    const button = getByText('Loading ...');
    const user = userEvent.setup();
    expect(queryByText('Click Me')).not.toBeInTheDocument();
    expect(button).toHaveClass('btn-success', 'test-class');
    expect(mockClick).toHaveBeenCalledTimes(0);
    await user.click(button);
    expect(mockClick).toHaveBeenCalledTimes(0);
  });
});
