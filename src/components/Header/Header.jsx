import { React, useState, useEffect } from 'react';
import SvgSelector from '../../assets/icons/SvgSelector';
import style from './Header.module.scss';
import Select from 'react-select';
import { useTheme } from '../../Hooks/useTheme';
import { useDispatch } from 'react-redux';
import { getWeather } from '../../redux/actions/actions';
export default function Header() {
  const options = [
    { value: 'moscow', label: 'Moscow' },
    { value: 'limassol', label: 'Limassol' },
    { value: 'paris', label: 'Paris' },
    { value: 'london', label: 'London' },
    { value: 'milan', label: 'Milan' },
  ];
  const theme = useTheme();
  const dispatch = useDispatch();
  const cssVars = [
    'body-background',
    'components-background',
    'card-background',
    'card-shadow',
    'text-color',
  ];

  const [chosenCity, setChosenCity] = useState('');
  const handle = (data) => {
    setChosenCity(data);
    dispatch(getWeather(data));
  };
  const styles = {
    control: (styles) => ({
      ...styles,
      backgroundColor:
        theme.theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles) => ({
      ...styles,
      color: 0 ? '#fff' : '#000',
    }),
  };

  const changeTheme = () => {
    theme.setTheme(theme.theme === 'lite' ? 'dark' : 'lite');
  };

  useEffect(() => {
    const root = document.querySelector(':root');
    dispatch(getWeather('limassol'));
    cssVars.forEach((style) => {
      root.style.setProperty(
        `--${style}-default`,
        `var(--${style}-${theme.theme})`
      );
    });
  }, [theme.theme]);

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>
          <SvgSelector id="header-logo" />
        </div>

        <div className={style.title}>Weather App</div>
      </div>
      <div className={style.wrapper}>
        <div onClick={changeTheme} className={style.change_theme}>
          <SvgSelector id="change-theme" />
        </div>
        <Select
          onChange={(e) => {
            handle(e.value);
          }}
          styles={styles}
          options={options}
          defaultValue={chosenCity}
          value={options.find((elem) => elem.value === chosenCity)}
        />
      </div>
    </header>
  );
}
