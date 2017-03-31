import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { AsyncStorage, Alert } from 'react-native';
import Popup from 'react-native-popup';
import {
  CHECK_IN,
  CHECK_IN_EID_CHANGED,
  CHECK_IN_SUCCESS,
  CHECK_IN_FAIL,
  CHECK_OUT,
  CHECK_OUT_EID_CHANGED,
  CHECK_OUT_SUCCESS,
  CHECK_OUT_FAIL
} from './types';

export const checkInEidChanged = (text) => {
  return {
    type: CHECK_IN_EID_CHANGED,
    payload: text
  };
};

export const checkOutEidChanged = (text) => {
  return {
    type: CHECK_OUT_EID_CHANGED,
    payload: text
  };
};

export const checkInUser = ({ eidCheckIn }) => {
  return (dispatch) => {
    dispatch({ type: CHECK_IN });

    try {
      AsyncStorage.getItem('@KulizaAttendance:access_token').then(
        (token) => {
          if (token !== null) {
            console.log(token);
            const config = { headers: { 'Authorization': 'Token ' + token } };
            console.log(config);
            console.log(eidCheckIn);
            axios.post('http://52.87.255.243:8003/employee/checkin/', {
              emp: eidCheckIn,
            }, config)
            .then(response => {
              console.log(response);
              if (response.data.code === 0) {
                checkInSuccess(dispatch, response);
              } else {
                checkInFail(dispatch, response.data.message);
              }
            }
          )
          .catch(() => {
            checkInFail(dispatch, "Network Error");
          });
        }
      }
    );
  } catch (error) {
    // Error retrieving data
  }
};
};

const DialogAndroid = require('react-native-dialogs');

const checkInFail = (dispatch, message) => {
  dispatch({ type: CHECK_IN_FAIL });
  // Alert.alert(
  //   'Check In Result',
  //   'Failed to Check In\nMessage: ' + message,
  //   [
  //     { text: 'OK' },
  //   ],
  //   { cancelable: false }
  // );
  const options = {
    title: 'Check In Result',
    content: `Failed to Check In\nMessage: ${message}`,
    positiveText: 'OK',
  };

  const dialog = new DialogAndroid();
  dialog.set(options);
  dialog.show();
};

const checkInSuccess = (dispatch, user) => {
  dispatch({
    type: CHECK_IN_SUCCESS,
    payload: user
  });
  const options = {
    title: 'Check In Result',
    content: 'Successfully Checked In',
    positiveText: 'OK',
    onPositive: () => Actions.pop(),
  };

  const dialog = new DialogAndroid();
  dialog.set(options);
  dialog.show();
};

export const checkOutUser = ({ eidCheckOut }) => {
  return (dispatch) => {
    dispatch({ type: CHECK_OUT });
    try {
      AsyncStorage.getItem('@KulizaAttendance:access_token').then(
        (token) => {
          if (token !== null) {
            console.log(token);
            const config = { headers: { 'Authorization': 'Token ' + token } };
            console.log(config);
            axios.post('http://52.87.255.243:8003/employee/checkout/', {
              emp: eidCheckOut,
            }, config)
            .then(response => {
              console.log(response);
              if (response.data.code === 0) {
                checkOutSuccess(dispatch, response);
              } else {
                checkOutFail(dispatch, response.data.message);
              }
            }
          )
          .catch(() => {
            checkOutFail(dispatch, "Network Error");
          });
        }
      }
    );
  } catch (error) {
    // Error retrieving data
  }
};
};

const checkOutFail = (dispatch, message) => {
  dispatch({ type: CHECK_OUT_FAIL });

  const options = {
    title: 'Check Out Result',
    content: `Failed to Check Out\nMessage: ${message}`,
    positiveText: 'OK',
  };

  const dialog = new DialogAndroid();
  dialog.set(options);
  dialog.show();
};

const checkOutSuccess = (dispatch, user) => {
  dispatch({
    type: CHECK_OUT_SUCCESS,
    payload: user
  });

  const options = {
    title: 'Check Out Result',
    content: 'Successfully Checked Out',
    positiveText: 'OK',
    onPositive: () => Actions.pop(),
  };

  const dialog = new DialogAndroid();
  dialog.set(options);
  dialog.show();
};
