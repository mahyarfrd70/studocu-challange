import type {ChangeEventHandler} from 'react';

export interface TextAreaProps {
  name: string;
  value: string;
  placeholder?: string;
  invalidMessage?: string | false;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
}
