import React, {memo} from 'react';
import type {PropsWithChildren} from 'react';

import type {InputWrapperProps} from '.';

const InputWrapper = ({label, children}: PropsWithChildren<InputWrapperProps>) => {
  return (
    <div>
      <label data-testid="label" className="label">
        {label}
      </label>
      {children}
    </div>
  );
};

export default memo(InputWrapper);
