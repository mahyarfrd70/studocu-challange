import userEvent from '@testing-library/user-event';

import {render} from '@testing-library/react';

import Modal from '..';

describe('components > Modal', () => {
  it('default open', async () => {
    expect.assertions(10);
    const mockClose = jest.fn();
    const spyAddClass = jest.spyOn(document.body.classList, 'add');
    const spyRemoveClass = jest.spyOn(document.body.classList, 'remove');
    const {getByText, getByTestId, queryByText} = render(
      <Modal open={true} onClose={mockClose}>
        <span>modal content</span>
      </Modal>,
    );
    const user = userEvent.setup();
    expect(getByText('modal content')).toBeInTheDocument();
    expect(getByTestId('modal-container')).not.toHaveClass('!hidden');
    expect(spyAddClass).toHaveBeenCalledTimes(1);
    expect(spyRemoveClass).toHaveBeenCalledTimes(0);
    expect(mockClose).toHaveBeenCalledTimes(0);
    await user.click(getByTestId('modal-mask'));
    expect(queryByText('modal content')).not.toBeInTheDocument();
    expect(getByTestId('modal-container')).toHaveClass('!hidden');
    expect(spyAddClass).toHaveBeenCalledTimes(1);
    expect(spyRemoveClass).toHaveBeenCalledTimes(1);
    expect(mockClose).toHaveBeenCalledTimes(1);
    spyAddClass.mockRestore();
    spyRemoveClass.mockRestore();
  });

  it('default close', async () => {
    expect.assertions(6);
    const mockClose = jest.fn();
    const spyAddClass = jest.spyOn(document.body.classList, 'add');
    const spyRemoveClass = jest.spyOn(document.body.classList, 'remove');
    const {queryByTestId, getByTestId, queryByText} = render(
      <Modal open={false} onClose={mockClose}>
        <span>modal content</span>
      </Modal>,
    );
    expect(queryByText('modal content')).not.toBeInTheDocument();
    expect(getByTestId('modal-container')).toHaveClass('!hidden');
    expect(queryByTestId('modal-mask')).not.toBeInTheDocument();
    expect(spyAddClass).toHaveBeenCalledTimes(0);
    expect(spyRemoveClass).toHaveBeenCalledTimes(1);
    expect(mockClose).toHaveBeenCalledTimes(0);
    spyAddClass.mockRestore();
    spyRemoveClass.mockRestore();
  });
});
