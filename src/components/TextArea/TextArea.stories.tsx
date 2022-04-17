import {action} from '@storybook/addon-actions';
import {useEffect} from '@storybook/addons';

import type {Meta, Story} from '@storybook/react';
import {useState} from 'react';
import type {ChangeEvent} from 'react';

import TextArea from '.';
import type {TextAreaProps} from '.';

export default {
  title: 'Forms/Textarea',
  component: TextArea,
} as Meta;

const Template: Story<TextAreaProps> = ({value, ...args}) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    action('change-value');
  };

  return <TextArea {...args} value={inputValue} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  value: '',
  name: 'answer',
  invalidMessage: '',
  placeholder: 'Placeholder',
};

export const Invalid = Template.bind({});
Invalid.args = {
  value: '',
  name: 'answer',
  invalidMessage: 'invalid text',
  placeholder: 'Placeholder',
};

export const withDefaultValue = Template.bind({});
withDefaultValue.args = {
  value: 'This a default value',
  name: 'answer',
  invalidMessage: '',
  placeholder: 'Enter your v',
};
