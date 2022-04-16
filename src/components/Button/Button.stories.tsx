import type {Story, Meta} from '@storybook/react';

import Button from '.';
import type {ButtonProps} from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {onClick: {action: 'clicked'}},
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>Click me!</Button>;

export const Default = Template.bind({});
Default.args = {};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
  buttonTypeClass: 'btn-error',
};
