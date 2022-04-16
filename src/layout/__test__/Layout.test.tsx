import {render} from '@testing-library/react';

import Layout from '../index';

describe('layout', () => {
  it('render header and chilren', () => {
    const {getByTestId, getByText} = render(<Layout>children</Layout>);
    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByText('children')).toBeInTheDocument();
  });
});
