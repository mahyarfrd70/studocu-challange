import {render} from '@testing-library/react';

import InputWrapper from '..';

describe('components > InputWrapper', () => {
  it('label and children', () => {
    const {getByTestId, getByText} = render(<InputWrapper label="test label">test children</InputWrapper>);
    expect(getByTestId('label')).toHaveTextContent('test label');
    expect(getByText('test children')).toBeInTheDocument();
  });
});
