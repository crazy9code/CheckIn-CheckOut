import { Actions } from 'react-native-router-flux';
import axios from 'axios';
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

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    loginUserSuccess(dispatch);
  //   axios.post('http://192.168.150.184:8000/employee/login/', {
  //   username: email,
  //   password: password
  // })
  // .then(response => {
  //     console.log(response.data.code);
  //     if (response.data.code===0){
  //       loginUserSuccess(dispatch, response);
  //     } else {
  //       loginUserFail(dispatch);
  //     }
  //   }
  // )
  // .catch((error) => {
  //     console.log(error);
  //     loginUserFail(dispatch);
  //   });
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

  Actions.main();
};
