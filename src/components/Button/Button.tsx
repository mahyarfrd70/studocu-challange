import clsx from 'clsx';

import React, {memo} from 'react';
import type {PropsWithChildren} from 'react';

import type {ButtonProps} from '.';
import If from '../If';

const Button = ({
  buttonTypeClass = 'btn-primary',
  className,
  isLoading = false,
  onClick,
  children,
  dataTestId,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      data-testid={dataTestId}
      disabled={isLoading}
      className={clsx('btn', buttonTypeClass, className)}
      onClick={onClick}>
      <If condition={!isLoading}>{children}</If>
      <If condition={isLoading}>Loading ...</If>
    </button>
  );
};

export default memo(Button);
