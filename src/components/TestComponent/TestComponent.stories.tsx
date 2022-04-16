import {Meta, Story} from '@storybook/react';

import TestComponent, {TestComponentProps} from '.';

export default {
  title: 'TestComponent',
  component: TestComponent,
} as Meta;

const Template: Story<TestComponentProps> = (args) => <TestComponent {...args} />;

export const TemplateInstance = Template.bind({});
TemplateInstance.args = {
  className: 'text-red-500',
};
