import { Actions } from 'react-native-router-flux';
import axios from 'axios';
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

export const checkInUser = ({ eid }) => {
  return (dispatch) => {
    dispatch({ type: CHECK_IN });

  axios.post('https://demo8889499.mockable.io/checkin', {
    emp: eid,
  })
  .then(response => {
      console.log(response.data.code);
      if (response.data.code === 0) {
        checkInSuccess(dispatch, response);
      } else {
        checkInFail(dispatch);
      }
    }
  )
  .catch((error) => {
      console.log(error);
      checkInFail(dispatch);
    });
  };
};

const checkInFail = (dispatch) => {
  dispatch({ type: CHECK_IN_FAIL });
  console.log('failed to check in');
};

const checkInSuccess = (dispatch, user) => {
  dispatch({
    type: CHECK_IN_SUCCESS,
    payload: user
  });
  console.log('successfully checked in');
};

export const checkOutUser = ({ eid }) => {
  return (dispatch) => {
    dispatch({ type: CHECK_OUT });

  axios.post('https://demo8889499.mockable.io/checkin', {
    emp: eid,
  })
  .then(response => {
      console.log(response.data.code);
      if (response.data.code === 0) {
        checkOutSuccess(dispatch, response);
      } else {
        checkOutFail(dispatch);
      }
    }
  )
  .catch((error) => {
      console.log(error);
      checkOutFail(dispatch);
    });
  };
};

const checkOutFail = (dispatch) => {
  dispatch({ type: CHECK_OUT_FAIL });
  console.log('failed to check in');
};

const checkOutSuccess = (dispatch, user) => {
  dispatch({
    type: CHECK_OUT_SUCCESS,
    payload: user
  });
  console.log('successfully checked in');
};
