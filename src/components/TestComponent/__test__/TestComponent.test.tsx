import {render} from '@testing-library/react';

import TestComponent from '..';

describe('sample component', () => {
  it('lable', () => {
    expect.hasAssertions();
    const {getByText} = render(<TestComponent />);
    expect(getByText('TestComponent')).toBeInTheDocument();
  });
});
