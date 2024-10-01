import { useState, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import styles from './Tooltip.module.css';

type TooltipProps = {
  text: string;
  offsetX?: number;
  offsetY?: number;
  placement: 'right' | 'bottom';
  children: ReactNode;
}

const Tooltip = (props: TooltipProps) => {
  const {
    text,
    offsetX = 0,
    offsetY = 0,
    placement,
    children
  } = props;
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const targetElement = e.currentTarget;
    const { top, left, height, width } = targetElement.getBoundingClientRect();
    let calcTop = top + window.scrollY + offsetY
    let calcLeft = left + offsetX;
  
    if (placement === 'right') {
      calcTop += (height / 2) - 18;
      calcLeft += 60;
    } else if (props.placement === 'bottom') {
      calcTop += height + 5;
      calcLeft -=  (width / 2);
    }

    setPosition({
      top: calcTop,
      left: calcLeft
    });
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.container}
      >
        {children}
      </div>
      {isVisible 
        && createPortal(
          <div
            className={clsx({
              [styles.tooltipRight]: placement === 'right',
              [styles.tooltipBottom]: placement === 'bottom'
            })}
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`
            }}
          >
            {text}
          </div>,
          document.getElementById('root') as HTMLElement
        )}
    </>
  );
};

export default Tooltip;
