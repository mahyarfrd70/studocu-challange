import {render} from '@testing-library/react';
import {ReactElement} from 'react';

import HTMLHeadWrapper from '../HTMLHeadWrapper';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({children}: {children: Array<ReactElement>}) => {
      return <>{children}</>;
    },
  };
});

describe('components > HTMLHeadWrapper', () => {
  it('check props', () => {
    const {getByText} = render(
      <HTMLHeadWrapper title="title" description="this is description">
        heaad wrapper text
      </HTMLHeadWrapper>,
      {container: document.head},
    );
    expect(document.title).toBe('title');
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'this is description');
    expect(getByText('heaad wrapper text')).toBeInTheDocument();
  });
});
