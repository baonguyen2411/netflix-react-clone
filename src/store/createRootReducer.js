import { combineReducers } from 'redux';

import userReducer, { ROOT_STATE_NAME as USER } from '../slices/user';
import movieReducer, { ROOT_STATE_NAME as MOVIE } from '../slices/movie';

export default function createRootReducer() {
  const rootReducer = combineReducers({
    [USER]: userReducer,
    [MOVIE]: movieReducer,
  });

  return rootReducer;
}
