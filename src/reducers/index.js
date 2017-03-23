import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CheckInReducer from './CheckInReducer';

export default combineReducers({
  auth: AuthReducer,
  checkin: CheckInReducer,
});
