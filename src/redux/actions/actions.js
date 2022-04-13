export const fetchWeatherBegining = () => {
  return { type: 'FETCH_WEATHER' };
};

export const getWeather = (city) => {
  return async (dispatch) => {
    dispatch(fetchWeatherBegining());
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=35b98b8f043074862a90825460f0b947`
    );
    const jsonData = await resp.json();
    console.log(jsonData);
    dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: jsonData });
  };
};

export const handlePopup = () => {
  return { type: 'HANDLE_POPUP' };
};
