import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import { AsyncStorage, Alert } from 'react-native';
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

const getToken = async() => {
  try {
    const value = await AsyncStorage.getItem('@KulizaAttendance:access_token');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};

export const checkInUser = ({ eid }) => {
  return (dispatch) => {
    dispatch({ type: CHECK_IN });

    getToken();

    axios.post('https://demo8889499.mockable.io/checkin', {
      emp: eid,
    })
    .then(response => {
        if (response.data.code === 0) {
          checkInSuccess(dispatch, response);
        } else {
          checkInFail(dispatch, response.data.message);
        }
      }
    )
    .catch((error) => {
      checkInFail(dispatch);
    });
  };
};

const checkInFail = (dispatch, message) => {
  dispatch({ type: CHECK_IN_FAIL });
  Alert.alert(
    'Check In Result',
    'Failed to Check In\nMessage: ' + message,
    [
      { text: 'OK' },
    ],
    { cancelable: false }
  );
};

const checkInSuccess = (dispatch, user) => {
  dispatch({
    type: CHECK_IN_SUCCESS,
    payload: user
  });

  Alert.alert(
    'Check In Result',
    'Successfully Checked In',
    [
      { text: 'OK', onPress: () => Actions.pop() },
    ],
    { cancelable: false }
  );
};

export const checkOutUser = ({ eid }) => {
  return (dispatch) => {
    dispatch({ type: CHECK_OUT });

  axios.post('https://demo8889499.mockable.io/checkin', {
    emp: eid,
  })
  .then(response => {
      if (response.data.code === 0) {
        checkOutSuccess(dispatch, response);
      } else {
        checkOutFail(dispatch, response.data.message);
      }
    }
  )
  .catch((error) => {
      checkOutFail(dispatch);
    });
  };
};

const checkOutFail = (dispatch, message) => {
  dispatch({ type: CHECK_OUT_FAIL });
  Alert.alert(
    'Check Out Result',
    'Failed to Check Out\nMessage: ' + message,
    [
      { text: 'OK' },
    ],
    { cancelable: false }
  );
};

const checkOutSuccess = (dispatch, user) => {
  dispatch({
    type: CHECK_OUT_SUCCESS,
    payload: user
  });

  Alert.alert(
    'Check Out Result',
    'Successfully Checked Out',
    [
      { text: 'OK', onPress: () => Actions.pop() },
    ],
    { cancelable: false }
  );
};
