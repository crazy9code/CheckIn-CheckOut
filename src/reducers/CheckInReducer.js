import {
  CHECK_IN_EID_CHANGED,
  CHECK_IN,
  CHECK_IN_SUCCESS,
  CHECK_IN_FAIL,
  CHECK_OUT_EID_CHANGED,
  CHECK_OUT,
  CHECK_OUT_SUCCESS,
  CHECK_OUT_FAIL,
  EMPLOYEE_COUNT
} from '../actions/types';

const INITIAL_STATE = {
  eidCheckIn: '',
  eidCheckOut: '',
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_IN_EID_CHANGED:
      return { ...state, eidCheckIn: action.payload };
    case CHECK_IN:
      return { ...state, loading: true, error: '' };
    case CHECK_IN_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case CHECK_IN_FAIL:
      return { ...state, eidCheckIn: '', error: 'Authentication Failed.', loading: false };
    case CHECK_OUT_EID_CHANGED:
      return { ...state, eidCheckOut: action.payload };
    case CHECK_OUT:
      return { ...state, loading: true, error: '' };
    case CHECK_OUT_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case CHECK_OUT_FAIL:
      return { ...state, eidCheckOut: '', error: 'Authentication Failed.', loading: false };
    case EMPLOYEE_COUNT:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
