import {render} from '@testing-library/react';

import If from '..';

describe('components > If', () => {
  it('condition false', () => {
    const {queryByText} = render(<If condition={false}>test</If>);
    expect(queryByText('test')).not.toBeInTheDocument();
  });

  it('condition true', () => {
    const {queryByText} = render(<If condition={true}>test</If>);
    expect(queryByText('test')).toBeInTheDocument();
  });
});
