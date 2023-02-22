import React, {forwardRef, PropsWithChildren, useEffect, useState} from 'react';
import { Box, Tooltip as MTooltip } from '@mui/material';

export type TooltipProps = {
  /**
   * Tooltip placement
   */
  placement?: 'bottom' | 'top' | 'left' | 'right' | 'bottom-start';
  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  text: string | React.ReactNode;
  /**
   * show the tooltip only when text is truncated with ellipsis
   */
  showOnEllipsis?: boolean;
  /**
   * If true, adds an arrow to the tooltip.
   */
  arrow?: boolean;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: any;
}

export const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = forwardRef<any, TooltipProps>(
  (props, ref) => {
    const { children, text, placement, classes, showOnEllipsis, arrow } = props as PropsWithChildren<TooltipProps>;

    const [title, setTitle] = useState(text);
    useEffect(() => {
      setTitle(text);
    }, [text]);

    const handleMouseEnter = (event: any) => {
      if (showOnEllipsis) {
        const container = event.currentTarget;
        if (container?.firstChild) {
          const element = container.firstChild;
          if (element.offsetWidth < (element.scrollWidth - 1) || element.offsetHeight < (element.scrollHeight - 1)) {
            setTitle(text);
          } else {
            setTitle('');
          }
        }
      }
    }
    
    return (
      <MTooltip
        ref={ref}
        arrow={arrow}
        title={title}
        placement={placement}
      >
        <div style={{ display: 'inline-block' }} onMouseEnter={handleMouseEnter}>{children}</div>
      </MTooltip>
    );
  }
);

Tooltip.defaultProps = {
  placement: 'top',
  arrow: false,
  showOnEllipsis: false
};
