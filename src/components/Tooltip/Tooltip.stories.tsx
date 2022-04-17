import type {Meta, Story} from '@storybook/react';

import Tooltip from '.';
import type {TooltipProps} from '.';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => {
  return (
    <Tooltip {...args}>
      <span>Hover me!</span>
    </Tooltip>
  );
};

export const Default = Template.bind({});
Default.args = {
  tooltipContent: 'tooltip test content',
};
