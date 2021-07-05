import { useState } from 'react';
import s from './s.module.css';
import cn from 'classnames';

export const TimeIntervalButtons = () => {
  const [activeIdx, setActiveIdx] = useState(1);

  const handlerClick = (e, idx) => {
    setActiveIdx(idx);
  };

  return (
    <div className={s.wrap}>
      {['Week', 'Month', 'Year'].map((children, idx) => (
        <button
          key={idx}
          type="button"
          className={cn(s.button, { [s.active]: idx === activeIdx })}
          onClick={(e) => handlerClick(e, idx)}
        >
          {children}
        </button>
      ))}
    </div>
  );
};
