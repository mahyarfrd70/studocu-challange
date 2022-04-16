import {action} from '@storybook/addon-actions';

import type {Meta, Story} from '@storybook/react';

import Card from '.';
import type {CardProps} from '.';

export default {
  title: 'View/Card',
  component: Card,
} as Meta;

export const Default: Story<CardProps> = (args) => {
  return <Card {...args} onDeleteQuestion={action('delete-clicked')} onEditQuestion={action('edit-clicked')} />;
};

Default.args = {
  question: 'Is this a question ?',
  answer: 'Yes, it is',
};
