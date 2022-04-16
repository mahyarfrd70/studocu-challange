import {ChangeEvent} from 'react';

export interface CheckboxProps {
  checked: boolean;
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
