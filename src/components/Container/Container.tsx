import clsx from 'clsx';

import React from 'react';
import type {PropsWithChildren} from 'react';

import type {ContainerProps} from '.';

const Container = ({className, children}: PropsWithChildren<ContainerProps>) => {
  return <div className={clsx('max-w-4xl m-auto', className)}>{children}</div>;
};

export default Container;
