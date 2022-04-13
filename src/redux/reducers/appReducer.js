const init = { weather: [], isLoading: false };

export const appReducer = (state = init, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER': {
      return { ...state, isLoading: true };
    }
    case 'FETCH_WEATHER_SUCCESS': {
      return { ...state, isLoading: false, weather: action.payload };
    }
    default:
      return { ...state };
  }
};
