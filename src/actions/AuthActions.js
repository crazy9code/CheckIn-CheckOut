import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

const storeToken = async(text) => {
  try {
    await AsyncStorage.setItem('@KulizaAttendance:access_token', text);
  } catch (error) {
    // Error saving data
  }
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    axios.post('http://52.87.255.243:8003/employee/login/', {
    username: email,
    password: password
  })
  .then(response => {
      if (response.data.code === 0) {
        loginUserSuccess(dispatch, response);
        storeToken(response.data.token);
      } else {
        loginUserFail(dispatch);
      }
    }
  )
  .catch((error) => {
      loginUserFail(dispatch);
    });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main({ type: 'reset' });
};
