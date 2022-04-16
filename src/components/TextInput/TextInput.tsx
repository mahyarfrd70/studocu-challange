import clsx from 'clsx';

import React, {memo} from 'react';

import type {TextInputProps} from '.';
import If from '../If';

const TextInput = ({name, value, placeholder = '', type = 'text', invalidMessage, onChange}: TextInputProps) => {
  return (
    <>
      <input
        data-testid={name}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        className={clsx('input input-bordered mb-1 w-full', {'input-error': invalidMessage})}
        onChange={onChange}
      />
      <If condition={Boolean(invalidMessage)}>
        <div data-testid={`${name}-invalid-text`} className="text-error text-sm">
          {invalidMessage}
        </div>
      </If>
    </>
  );
};

export default memo(TextInput);
