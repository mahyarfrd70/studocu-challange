import {action} from '@storybook/addon-actions';
import {useEffect} from '@storybook/addons';

import type {Meta, Story} from '@storybook/react';
import {useState} from 'react';
import type {ChangeEvent} from 'react';

import TextInput from '.';
import type {TextInputProps} from '.';

export default {
  title: 'Forms/TextInput',
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = ({value, ...args}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    action('change-value');
  };

  return <TextInput {...args} value={inputValue} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: '',
  name: 'email',
  invalidMessage: '',
  placeholder: 'Placeholder',
};

export const InvalidInput = Template.bind({});
InvalidInput.args = {
  value: '',
  name: 'email',
  invalidMessage: 'invalid text',
  placeholder: 'Placeholder',
};

export const Password = Template.bind({});
Password.args = {
  value: 'password',
  name: 'password',
  invalidMessage: '',
  placeholder: 'Enter your password',
  type: 'password',
};
