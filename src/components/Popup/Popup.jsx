import React from 'react';
import SvgSelector from '../../assets/icons/SvgSelector';
import DayItem from '../DayInfo/DayItem';
import style from './Popup.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { handlePopup } from '../../redux/actions/actions';
export default function Popup({ item }) {
  console.log(item);
  const popUpState = useSelector((state) => state.popUp.isOpen);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.app.weather);
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const weekDay = () => {
    switch (today.getDay()) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
    }
  };
  return (
    <div
      style={popUpState ? { display: 'flex' } : { display: 'none' }}
      className={style.popup}>
      <div className={style.day}>
        <div className={style.day_temp}>
          {data.main === undefined ? '' : Math.round(data.main.temp - 273.15)}°
        </div>
        <div className={style.day_name}>{weekDay()}</div>
        <div className={style.img}>
          <SvgSelector id="sun" />
        </div>
        <div className={style.time}>
          <span>{`${hours}: ${minutes < 10 ? `0${minutes}` : minutes}`}</span>
        </div>
        <div className={style.city}>
          <span>City: {data.name} </span>
        </div>
      </div>
      <div className={style.day_info_items}>
        {item === undefined
          ? []
          : item.map((item) => <DayItem item={item} key={item.iconId} />)}
      </div>
      <div
        onClick={() => {
          dispatch(handlePopup());
        }}
        className={style.close}>
        <SvgSelector id="close" />
      </div>
    </div>
  );
}
