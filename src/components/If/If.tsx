import React, {memo} from 'react';
import {PropsWithChildren} from 'react';

import type {IfProps} from '.';

const If = ({condition, children}: PropsWithChildren<IfProps>) => {
  if (condition) return <>{children}</>;
  return null;
};

export default memo(If);
