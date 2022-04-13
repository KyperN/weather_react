import React from 'react';
import SvgSelector from '../../assets/icons/SvgSelector';
import style from './Days.module.scss';

export default function Tabs() {
  const tabs = [
    { value: 'На неделю' },
    { value: 'На 10 дней' },
    { value: 'На месяц' },
  ];

  return (
    <div className={style.tabs}>
      <div className={style.tabs_wrapper}>
        {tabs.map((elem) => {
          return (
            <div key={elem.value} className={style.tab}>
              {elem.value}
            </div>
          );
        })}
      </div>
    </div>
  );
}
