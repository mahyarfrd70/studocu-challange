import userEvent from '@testing-library/user-event';

import {render} from '@testing-library/react';

import Tooltip from '..';

describe('components > Tooltip', () => {
  it('show and hide', async () => {
    expect.assertions(3);
    const {getByTestId, getByText} = render(
      <Tooltip tooltipContent="tooltip test content">
        <span>hover me</span>
      </Tooltip>,
    );
    const user = userEvent.setup();
    expect(getByTestId('tooltip-content')).toHaveClass('hidden');
    await user.hover(getByText('hover me'));
    expect(getByTestId('tooltip-content')).not.toHaveClass('hidden');
    expect(getByTestId('tooltip-content')).toHaveTextContent('tooltip test content');
  });
});
