import { createStore } from 'redux';
import { combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from '../reducers/appReducer';
const rootReducer = combineReducers({
  app: appReducer,
});

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
