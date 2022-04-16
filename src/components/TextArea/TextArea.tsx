import clsx from 'clsx';

import React, {memo} from 'react';

import type {TextAreaProps} from '.';
import If from '../If';

const TextArea = ({name, value, placeholder = '', invalidMessage, onChange}: TextAreaProps) => {
  return (
    <>
      <textarea
        data-testid={name}
        name={name}
        value={value}
        className={clsx('textarea textarea-bordered w-full', {'textarea-error': invalidMessage})}
        placeholder={placeholder}
        onChange={onChange}></textarea>
      <If condition={Boolean(invalidMessage)}>
        <div data-testid={`${name}-invalid-text`} className="text-error text-sm">
          {invalidMessage}
        </div>
      </If>
    </>
  );
};

export default memo(TextArea);
