import {
  CHECK_IN_EID_CHANGED,
  CHECK_IN,
  CHECK_IN_SUCCESS,
  CHECK_IN_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  eid: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_IN_EID_CHANGED:
      return { ...state, eid: action.payload };
    case CHECK_IN:
      return { ...state, loading: true, error: '' };
    case CHECK_IN_SUCCESS:
      return { ...state, ...INITIAL_STATE};
    case CHECK_IN_FAIL:
      return { ...state, error: 'Authentication Failed.', loading: false };
    default:
      return state;
  }
};
