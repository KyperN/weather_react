import React from 'react';
import SvgSelector from '../../assets/icons/SvgSelector';
import style from './Day.module.scss';
import { useSelector } from 'react-redux';
export default function Day() {
  const data = useSelector((state) => state.app.weather);

  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();

  const weatherPicture = () => {
    switch (data.weather[0].main) {
      case 'Clouds':
        return 'mainly_cloudy';
      case 'Clear':
        return 'sun';
    }
  };

  return (
    <header className={style.day}>
      <div className={style.top_block}>
        <div className={style.top_block_wrapper}>
          <div className={style.day_temp}>
            {data.main === undefined ? '' : Math.round(data.main.temp - 273.15)}
            °
          </div>
          <div className={style.day_name}>Today</div>
        </div>
        <SvgSelector id={data.main === undefined ? '' : weatherPicture()} />
      </div>
      <div className={style.bottom_block}>
        <div className={style.day_time}>
          Time:{' '}
          <span>{`${hours}: ${minutes < 10 ? `0${minutes}` : minutes}`}</span>
        </div>
        <div className={style.day_city}>{data.name}</div>
      </div>
    </header>
  );
}
