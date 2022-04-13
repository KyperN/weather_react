import React from 'react';
import SvgSelector from '../../assets/icons/SvgSelector';
import style from './Days.module.scss';

export default function Card({ day }) {
  const { dayInfo, iconId, tempDay, tempNight, info } = day;

  return (
    <div className={style.card}>
      <div className={style.day}>{day.day}</div>
      <div className={style.day_info}>{dayInfo}</div>
      <div className={style.img}>
        <SvgSelector id={iconId} />
      </div>
      <div className={style.day_temp_day}>{tempDay}</div>
      <div className={style.day_temp_night}>{tempNight}</div>
      <div className={style.info}>{info}</div>
    </div>
  );
}
