import React from 'react';
import Day from '../../components/Day/Day';
import DayInfo from '../../components/DayInfo/DayInfo';
import Days from '../../components/Days/Days';
import style from './Home.module.scss';

export default function Home() {
  return (
    <div className={style.home}>
      <div className={style.wrapper}>
        <Day />
        <DayInfo />
      </div>
      <Days />
    </div>
  );
}
