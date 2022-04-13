import React from 'react';
import style from './DayInfo.module.scss';
import cloud from '../../assets/images/cloud.png';
import DayItem from './DayItem';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handlePopup } from '../../redux/actions/actions';
import Popup from '../Popup/Popup';
export default function DayInfo() {
  const data = useSelector((state) => state.app.weather);
  const dispatch = useDispatch();
  const windDirection = (direction) => {
    switch (true) {
      case direction >= 0 && direction <= 90:
        return 'North - NE';
      case direction > 90 && direction < 180:
        return 'East - SE';
      case direction >= 180 && direction <= 270:
        return 'S - SW';
      case (direction = 270 && direction <= 360):
        return 'W - NW';
      default:
        return direction;
    }
  };

  const items = [
    {
      iconId: 'temp',
      name: 'Temperature',
      value: `${
        data.main === undefined ? '' : Math.round(data.main.temp - 273.15)
      }° - feels like ${
        data.main === undefined ? '' : Math.round(data.main.temp - 273.15)
      }°`,
    },

    {
      iconId: 'pressure',
      name: 'Pressure',
      value: `${data.main === undefined ? '' : data.main.pressure} mm - ${
        data.main === undefined
          ? ''
          : data.main.pressure > 1000
          ? 'above normal'
          : 'normal'
      }`,
    },
    {
      iconId: 'precipitation',
      name: 'Precipitation',
      value: 'No precipitation',
    },
    {
      iconId: 'wind',
      name: 'Wind',
      value:
        data.wind === undefined
          ? ''
          : `${data.wind.speed}  ${windDirection(data.wind.deg)}`,
    },
  ];

  return (
    <div className={style.day_info}>
      <Popup item={items} />
      <div
        onClick={() => {
          dispatch(handlePopup());
        }}
        className={style.day_info_items}>
        {items.map((item) => (
          <DayItem item={item} key={item.iconId} />
        ))}
      </div>
      <img className={style.cloud_img} src={cloud} alt="Cloud" />
    </div>
  );
}
