import React, { ReactElement, useState } from 'react';
import styles from './ToolTipComponent.module.scss';

type PropsType = {
  children: ReactElement;
  text: string;

  customClass?: string;
};

const ToolTipComponent: React.FC<PropsType> = ({ children, text, customClass }) => {
  const [showToolTip, setShowToolTip] = useState(false);
  const toolTipClasses = customClass ? `${styles.tooltip} ${customClass}` : `${styles.tooltip}`;

  const onMouseEnterHandler = () => {
    setShowToolTip(true); 
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {children}
      {showToolTip && <div className={toolTipClasses}>{text}</div>}
    </div>
  );
};

export default ToolTipComponent;
