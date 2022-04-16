import React from 'react';

import {CheckboxProps} from '.';

const Checkbox = ({checked, label, onChange}: CheckboxProps) => {
  return (
    <label className="label cursor-pointer justify-start">
      <input type="checkbox" checked={checked} className="checkbox checkbox-primary" onChange={onChange} />
      <span className="label-text ml-3">{label}</span>
    </label>
  );
};

export default Checkbox;
