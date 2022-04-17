import {action} from '@storybook/addon-actions';

import type {Meta, Story} from '@storybook/react';

import Checkbox from '.';
import type {CheckboxProps} from '.';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
} as Meta;

export const Default: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args} onChange={action('checkbox-clicked')} />;
};

Default.args = {
  label: 'checkbox label',
  checked: false,
};
