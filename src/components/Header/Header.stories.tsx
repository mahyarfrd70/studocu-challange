import {action} from '@storybook/addon-actions';

import type {Meta, Story} from '@storybook/react';

import Header from '.';
import type {HeaderProps} from '.';

export default {
  title: 'View/Header',
  component: Header,
} as Meta;

export const Default: Story<HeaderProps> = () => {
  return (
    <Header
      onAddNewQuestion={action('add-clicked')}
      onSort={action('sort-clicked')}
      onRemoveAll={action('remove-clicked')}
    />
  );
};
