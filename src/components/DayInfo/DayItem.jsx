import React from 'react';
import style from './DayInfo.module.scss';
import SvgSelector from '../../assets/icons/SvgSelector';
export default function DayItem({ item }) {
  const { iconId, name, value } = item;

  return (
    <div className={style.item}>
      <div className={style.indicator}>
        <SvgSelector id={iconId} />
      </div>
      <div className={style.indicator_name}>{name}</div>
      <div className={style.indicator_value}>{value}</div>
    </div>
  );
}
