import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_ERROR,
} from "ducks/auth/const";

const defaultState = {
  user: null,
  loading: null,
  error: null,
  registered: false,
  auth: false,
  token: null,
};

export default function reducer(state = defaultState, action) {
  const { type, payload, error } = action;

  switch (type) {
    case SIGN_UP_REQUEST:
      return { ...state, loading: true };
    case SIGN_UP_SUCCESS:
      return { ...state, loading: false, registered: true, error: null };
    case SIGN_UP_ERROR:
      return { ...state, loading: false, error };

    case SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        token: payload.token,
        auth: true,
        error: null,
      };
    case SIGN_IN_ERROR:
      return { ...state, loading: false, error };

    case SIGN_OUT_REQUEST:
      return { ...state, loading: true };
    case SIGN_OUT_SUCCESS:
      return { ...state, user: null, auth: false, token: null, loading: false };
    case SIGN_OUT_ERROR:
      return { ...state, loading: false };
  }

  return state;
}
