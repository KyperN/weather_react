import React from 'react';
import Card from './Card';
import style from './Days.module.scss';
import Tabs from './Tabs';

const days = [
  {
    day: 'Сегодня',
    dayInfo: '28 авг',
    iconId: 'sun',
    tempDay: '+18',
    tempNight: '+15',
    info: 'Облачно',
  },
  {
    day: 'Завтра',
    dayInfo: '29 авг',
    iconId: 'small_rain_sun',
    tempDay: '+18',
    tempNight: '+15',
    info: 'небольшой дождь и солнце',
  },
  {
    day: 'Ср',
    dayInfo: '30 авг',
    iconId: 'small_rain',
    tempDay: '+18',
    tempNight: '+15',
    info: 'небольшой дождь',
  },
  {
    day: 'Чт',
    dayInfo: '28 авг',
    iconId: 'mainly_cloudy',
    tempDay: '+18',
    tempNight: '+15',
    info: 'Облачно',
  },
  {
    day: 'Пт',
    dayInfo: '28 авг',
    iconId: 'rain',
    tempDay: '+18',
    tempNight: '+15',
    info: 'Облачно',
  },
  {
    day: 'Сб',
    dayInfo: '28 авг',
    iconId: 'sun',
    tempDay: '+18',
    tempNight: '+15',
    info: 'Облачно',
  },
  {
    day: 'Вс',
    dayInfo: '28 авг',
    iconId: 'sun',
    tempDay: '+18',
    tempNight: '+15',
    info: 'Облачно',
  },
];

export default function Days() {
  return (
    <>
      <Tabs />

      <div className={style.days}>
        {days.map((day) => {
          return <Card day={day} />;
        })}
      </div>
    </>
  );
}
