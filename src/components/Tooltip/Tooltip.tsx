import clsx from 'clsx';

import React, {useCallback, useState} from 'react';
import type {PropsWithChildren} from 'react';

import styles from './styles.module.css';
import type {TooltipProps} from './tooltip.type';

// this tooltip component is simple.
// it coulde be customizable with props, such as adding custom style and render jsx as a tooltipContent.
const Tooltip = ({tooltipContent, children}: PropsWithChildren<TooltipProps>) => {
  const [isShown, setIsShown] = useState(false);

  const showTooltip = useCallback(() => setIsShown(true), []);
  const hideTooltip = useCallback(() => setIsShown(false), []);

  return (
    <div className="inline-block relative" onMouseOver={showTooltip} onMouseOut={hideTooltip}>
      {children}
      <span data-testid="tooltip-content" className={clsx(styles.tooltipContent, {hidden: !isShown})}>
        {tooltipContent}
      </span>
    </div>
  );
};

export default Tooltip;
